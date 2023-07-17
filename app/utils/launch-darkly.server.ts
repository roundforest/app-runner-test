import * as ld from 'launchdarkly-node-server-sdk'
import env from 'env-var'

let ldClient: ld.LDClient | undefined

const launchDarklyApiKeyProd = env.get('LAUNCH_DARKLY_API_KEY_PROD').required().asString()
const launchDarklyApiKeyTest = env.get('LAUNCH_DARKLY_API_KEY_TEST').required().asString()

async function initializeLdClient() {
  const client =
    process.env.NODE_ENV === 'production'
      ? ld.init(launchDarklyApiKeyProd)
      : ld.init(launchDarklyApiKeyTest)
  await client.waitForInitialization()
  return client
}

export async function getLdClient() {
  if (ldClient) return ldClient
  return (ldClient = await initializeLdClient())
}
