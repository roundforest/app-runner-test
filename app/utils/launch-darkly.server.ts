// import * as ld from 'launchdarkly-node-server-sdk'
// import env from 'env-var'

// let ldClient: ld.LDClient | undefined

// declare global {
//   var __ldClient: ld.LDClient | undefined
// }

// const launchDarklyApiKeyProd = env.get('LAUNCH_DARKLY_API_KEY_PROD').required().asString()
// const launchDarklyApiKeyTest = env.get('LAUNCH_DARKLY_API_KEY_TEST').required().asString()

// if (process.env.NODE_ENV === 'production') {
//   ldClient = ld.init(launchDarklyApiKeyProd)
// } if (process.env.NODE_ENV === 'development') {
//   ldClient = ld.init(launchDarklyApiKeyTest)
// } else {
//   if (!global.__ldClient) {
//     global.__ldClient = ld.init(launchDarklyApiKeyProd)
//   }
//   ldClient = global.__ldClient
// }

// export {ldClient}
