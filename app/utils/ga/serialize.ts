interface LimitationValueProp {
  paramLength: number
  eventParamLimit: number
}
type Limitation = Record<number, LimitationValueProp>

export const limitation = {
  1: {
    paramLength: 100,
    eventParamLimit: 20,
  },
  2: {
    paramLength: 100,
    eventParamLimit: 100,
  },
} as Limitation

type StickySerialized = [key: string, value: SeiraliazedParameter][]
type SeiraliazedParameter = string | number | boolean | null
type LimitationLevel = keyof Limitation
type EventParameters = {[x: string]: any}


export function makeGEvents(
  name: string,
  eventParameters: EventParameters,
  stickySerialized: StickySerialized = [],
  limitationLevel: LimitationLevel = 1,
  sendFirst?: string[],
): [key: string, values: Record<string, any>][] {
  const transformedParameters = [
    ...prepareParameters(eventParameters, limitationLevel),
    ...stickySerialized,
  ]
  return prepareGEvents(
    name,
    sendFirst
      ? transformedParameters.sort((a) => (sendFirst.includes(a[0]) ? -1 : 1))
      : transformedParameters,
    limitationLevel,
  )
}

export function serializeSticky(
  stickyParameters: {[x: string]: any},
  setStickiesIfPassedLimitation: boolean = false,
): [key: string, value: SeiraliazedParameter][] {
  const parametersEntries = prepareParameters(stickyParameters)
  if (
    parametersEntries.length >= limitation[1]['eventParamLimit'] - 1 &&
    !setStickiesIfPassedLimitation
  )
    throw new Error(
      `Can't set more/equal stickies parameters(${parametersEntries.length}) then the limitation(${limitation[1]['eventParamLimit']})`,
    )
  return parametersEntries.slice(0, limitation[1]['eventParamLimit'] - 2)
}

export function prepareParameters(
  parameters: {[x: string]: any},
  limitationLevel: keyof Limitation = 1,
): [key: string, value: SeiraliazedParameter][] {
  const entries = Object.entries(parameters).reduce(
    (acc: [key: string, value: SeiraliazedParameter][], [key, value]) => {
      acc.push(...parameterValueSerializer(key, value, limitationLevel))
      return acc
    },
    [],
  )
  return entries
}

export function parameterValueSerializer(
  key: string,
  value: any,
  limitationLevel: keyof Limitation,
): any {
  if (value === undefined) {
    return [[key, null]]
  }
  const valueLengthLimit = limitation[limitationLevel]['paramLength']
  if (typeof value === 'string' && value.length > valueLengthLimit) {
    const truncatedValueEntries = []
    for (let i = 0; i < value.length; i += valueLengthLimit) {
      value.substring(i, i + valueLengthLimit)
      truncatedValueEntries.push([
        `${key}_inx_${i / valueLengthLimit}`,
        value.substring(i, i + valueLengthLimit),
      ])
    }
    return truncatedValueEntries
  }
  return [[key, value]]
}

function prepareGEvents(
  eventName: string,
  serializedEventParameters: [key: string, value: SeiraliazedParameter][],
  limitationLevel: keyof Limitation,
): [key: string, values: Record<string, any>][] {
  const eventParamLimit = limitation[limitationLevel]['eventParamLimit']
  const eventId = Date.now().toString(16) + Math.random().toString(16)
  if (serializedEventParameters.length < eventParamLimit)
    return [
      [
        eventName,
        {...{}, ...Object.fromEntries(serializedEventParameters), ...{event_id: eventId}},
      ],
    ]

  const gEvents: [key: string, values: Record<string, any>][] = []
  for (let i = 0; i < serializedEventParameters.length; i = i + (eventParamLimit - 2)) {
    const chunk = serializedEventParameters.slice(i, i + (eventParamLimit - 2))
    const name = i === 0 ? eventName : `${eventName}_ex`
    gEvents.push([
      name,
      {...{}, ...Object.fromEntries(chunk), ...{event_id: eventId, is_multi: true}},
    ])
  }
  return gEvents
}
