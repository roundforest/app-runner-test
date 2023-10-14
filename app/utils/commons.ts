export function extractFromUrlSearchParams(urlSearchParams: URLSearchParams, key: string) {
  const values = urlSearchParams.get(key)
  return values?.split('|') ?? []
}

export function toggleUrlSearchParams(urlSearchParams: URLSearchParams, key: string, value: string) {
  const values = extractFromUrlSearchParams(urlSearchParams, key)
  const newValues = values.includes(value) ? values.filter((v) => v !== value) : [...values, value]
  if (newValues.length) {
    urlSearchParams.set(key, newValues.join('|'))
  } else {
    urlSearchParams.delete(key)
  }
}
