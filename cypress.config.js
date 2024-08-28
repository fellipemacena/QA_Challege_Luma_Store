const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 2010,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  "reporterOptions": {
    "reportDir": "cypress/reportr",
    "reportFilename": "[name].html",
    "overwrite": true,
    "html": "true",
    "json": "false",
  },

  e2e: {
    baseURL: "https://magento.softwaretestingboard.com",
    specPattern: "**/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      env:{
        hideXhr: true
      }
    require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
