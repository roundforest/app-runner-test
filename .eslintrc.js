/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
  rules: {
    'no-warning-comments': [
      'warn',
      {terms: ['fixme', 'removeme', 'xxx', '@@@'], location: 'anywhere'},
    ],
  },
}
