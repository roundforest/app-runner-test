/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    '@roundforest/functional-commons',
    'crypto-random-string',
    '@roundforest/ga-commons',
    '@roundforest/url-commons',
    '@roundforest/text-transforms-commons',
  ],
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true,
    },
  },
  tailwind: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: 'build/index.js',
  // publicPath: "/build/",
  serverModuleFormat: 'cjs',
}
