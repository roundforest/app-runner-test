export {}

interface Configuration {
  pageLoadId: string
  referrer: string
  featureFlags: Record<string | number | symbol, any>
  featureFlagsHash: string
  abTests: Record<string | number | symbol, any>
  abTestsHash: string
}

declare global {
  interface Window {
    gtag: (event: string, eventName: string, options: Record<string, unknown>) => void
    __CONFIGURATION__: Configuration
  }
  function pp(params: number): () => number
}
