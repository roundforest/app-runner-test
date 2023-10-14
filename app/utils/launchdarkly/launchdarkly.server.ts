import * as ld from 'launchdarkly-node-server-sdk'
import {appConfig} from '~/app-config'

let ldClient: ld.LDClient | undefined

const launchDarklyApiKeyProd = appConfig['BDT_LAUNCH_DARKLY_API_KEY_PROD'] as string
const launchDarklyApiKeyTest = appConfig['BDT_LAUNCH_DARKLY_API_KEY_TEST'] as string

async function initializeLdClient() {
  const client =
    process.env.NODE_ENV === 'production' ? ld.init(launchDarklyApiKeyProd) : ld.init(launchDarklyApiKeyTest)
  await client.waitForInitialization()
  return client
}

export async function getLdClient() {
  if (ldClient) return ldClient
  return (ldClient = await initializeLdClient())
}
