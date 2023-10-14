export function mapObject<K extends string | number | symbol, L extends string | number | symbol, T, W>(
  object: Record<K, T>,
  mapFunction: (k: K, t: T) => [L, W],
): Record<L, W> {
  //@ts-expect-error
  return Object.fromEntries(Object.entries(object).map(([key, value]) => mapFunction(key, value)))
}
