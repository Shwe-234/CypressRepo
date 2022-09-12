/**
 * @author [Shweta Naik]
 * @create date 2022-08-30 
 * @modify date 2022-09-07 
 */
const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    "defaultCommandTimeout": 70000,
    "env": {
      "base_url": "https://portal-qa.brightmile.io",
      "auth_username": 'brightmile',
      "auth_password": 'sup3rm4n',

    },
    "pageLoadTimeout": 90000,
    "fixturesFolder": "cypress/fixtures",
    "viewportHeight": 768,
    "viewportWidth": 1366,
    "specPattern": "cypress/Integration/Tests/*.spec.js",
    "video": true,
    "video": true,
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "reportDir": "cypress/report",
      "charts": true,
      "reportPageTitle": "BrightMile  POC results"
    },
    "chromeWebSecurity": false,
    "videoCompression": false,



    projectId: 'xr9h1k', // <- add this line


    " experimentalSessionAndOrigin": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
