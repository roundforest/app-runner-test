import {mapObject} from '@roundforest/functional-commons'
import type {LDFlagSet} from 'launchdarkly-node-server-sdk'

export function extractFeatureFlagOverridesFromQueryParams(query:any) {
  if (Object.keys(query).length === 0) {
    return
  }

  return Object.fromEntries(
    Object.entries(query)
      .filter(([key]) => key.startsWith('ff_'))
      .map(([key, value]) => [key.replace('ff_', ''), value])
  )
}

export function parseAndCorrelateType(src: any, target: any) {
  const type = typeof src

  switch (type) {
    case 'undefined':
      if (target === 'true' || target === 'false') {
        return Boolean(target)
      }
      if (!isNaN(parseFloat(target))) {
        return parseFloat(target)
      }
      return target

    case 'string':
      return target

    case 'number':
      const number = parseInt(target, 10)

      if (!Number.isNaN(number)) {
        return number
      }
      return src

    case 'boolean':
      return target === 'true'

    default:
      return src
  }
}

export function normalizeFeatureFlags(
  flags: Record<string, any>,
  overrides?: Record<any, any>
): LDFlagSet {
  const ff = Object.entries(flags)
    .map((e: any) =>
      Array.isArray(e[1])
        ? e[1]?.reduce((p: any, n: any) => {
            return [...p, [n.name, n.value]]
          }, [])
        : e
    )
    .reduce((p: any, n: any) => {
      return typeof n?.[0] === 'object' ? [...p, ...n] : [...p, n]
    }, [])
    .map((n: any) => {
      return !isNaN(n[1]) && typeof n[1] != 'boolean'
        ? [n[0], parseFloat(n[1])]
        : n[1] === 'true'
        ? [n[0], true]
        : n[1] === 'false'
        ? [n[0], false]
        : n
    })
    .reduce((p: any, n: any) => ({...p, [n[0]]: n[1]}), {})
  if (overrides) {
    const correlatedTypes = mapObject(overrides, (key, value) => [
      key,
      parseAndCorrelateType(flags[key], value),
    ])
    return Object.assign(ff, correlatedTypes)
  }
  return ff
}
