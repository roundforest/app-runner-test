const EVENTS_BATCH_LIMIT = 5
const REPORTING_INTERVALE = 1000

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type GEvents = ReturnType<typeof import('./serialize')['makeGEvents']>

export function makeEventsMiddleware({
  ga,
  experimentPropertyId,
}: {
  ga: any
  experimentPropertyId: string
}) {
  const eventsQueue: GEvents = []

  function saveEvent(events: GEvents) {
    events.forEach((event) => eventsQueue.push(event))
  }

  function approveEventsReporting() {
    setInterval(reportBatchEvents, REPORTING_INTERVALE)
  }

  function reportBatchEvents() {
    const eventsBatch = eventsQueue.splice(0, Math.min(eventsQueue.length, EVENTS_BATCH_LIMIT))
    if (ga) sendGEvents(eventsBatch)
  }

  function sendGEvents(gEvents: [key: string, values: Record<string, any>][]) {
    return allSettled(
      gEvents.map(
        ([eventName, eventParams]) =>
          new Promise((res, rej) =>
            ga('event', eventName, {
              ...eventParams,
              event_callback: (error: Error, response: any) => (error ? rej(error) : res(response)),
              middlewareExperiment: 'true',
              send_to: experimentPropertyId,
            }),
          ),
      ),
    )
  }

  function allSettled(promises: Promise<string>[]) {
    const wrappedPromises = promises.map((p) =>
      p.then(
        (val) => ({status: 'fulfilled', value: val}),
        (err) => ({status: 'rejected', reason: err}),
      ),
    )
    return Promise.all(wrappedPromises)
  }

  return {saveEvent, approveEventsReporting}
}
