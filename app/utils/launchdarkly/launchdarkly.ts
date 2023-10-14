import type {LDFlagSet} from 'launchdarkly-node-server-sdk'
import {mapHostHeaderToLocaleParams} from '../map-locale'
import {userId} from '../cookies.server'
import {getLdClient} from './launchdarkly.server'
import {isMobile} from 'react-device-detect'
import {extractFeatureFlagOverridesFromQueryParams, normalizeFeatureFlags} from './feature-flags'

export async function getLaunchDarklyFeatureFlags(request: any): Promise<LDFlagSet> {
  const cookieHeader = request.headers.get('Cookie')
  const host = request.headers.get('host') || ''
  const {locale} = mapHostHeaderToLocaleParams(host)
  const url = new URL(request.url)
  const {searchParams} = url
  const userIdCookie = await userId.parse(cookieHeader)

  const launchDarkly = await getLdClient()

  launchDarkly?.identify({
    custom: {
      domain: host,
      device: isMobile ? 'mobile' : 'desktop',
    },
    key: userIdCookie,
    country: locale,
  })

  const allFeatureFlags = await launchDarkly?.allFlagsState({
    key: userIdCookie,
  })

  const featureFlags = normalizeFeatureFlags(allFeatureFlags?.allValues() ?? {})
  const searchParamsFF = extractFeatureFlagOverridesFromQueryParams(Object.fromEntries(searchParams))
  return normalizeFeatureFlags(featureFlags, searchParamsFF)
}
