const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: true,
    json: false,
  },
  defaultCommandTimeout: 15000,
  env: {
    siteUrl: 'https://admin-advertisement.herokuapp.com/advertisements',
    apiUrl:  'https://admin-advertisement.herokuapp.com/api/advertisements'
  },
  requestTimeout: 15000,
  viewportWidth: 1000,
  viewportHeight: 660,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
