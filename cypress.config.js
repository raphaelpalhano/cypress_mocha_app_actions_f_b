const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV_TEST === 'develop' ? '.env.dev' : '.env',
});

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    reportDir: './reports',
    reportPageTitle: 'Ms8 Report',
    reportTitle: 'Report Mocha',
  },
  e2e: {
    baseUrl: 'http://localhost:88',
    video: true,
    viewportWidth: 1600,
    viewportHeight: 900,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 5,
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',

    async setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      require('cypress-failed-log/on')(on);
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    BASESERVER: 'UI-MS8',
    USERS: {
      USER: process.env.USER,
      PASSWORD_SIGNIN: process.env.PASSWORD_SIGNIN,
      EMAIL: process.env.EMAIL,
      PASSWORD_SIGNUP: process.env.PASSWORD_SIGNUP,
    },
    grepFilterSpecs: true,

    serverRest: 'https://serverest.dev',
  },
});
