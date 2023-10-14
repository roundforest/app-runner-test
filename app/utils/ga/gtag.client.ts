import {makeClient} from '@roundforest/ga-commons'

export const GOOGLE_ADS_KEY = 'AW-978239894'
export const GOOGLE_ADS_ID = 'CFwgCNW7wFkQloO70gM'

function makeGoogleAnalyticsClient(): ReturnType<typeof makeClient> {
  const {
    pageLoadId,
    referrer,
    abTests: abTestFlags,
    abTestsHash,
    featureFlags,
    featureFlagsHash,
  } = window.__CONFIGURATION__

  return makeClient(window.gtag, {
    fullUrl: window.location.href,
    referrer,
    pageLoadId,
    userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    abTestFlags,
    abTestsHash,
    featureFlags,
    ffHash: featureFlagsHash,
    convKey: GOOGLE_ADS_KEY,
    convId: GOOGLE_ADS_ID,
    labels: {stack_version: 'remix'},
  })
}

export const gaClient = makeGoogleAnalyticsClient()
