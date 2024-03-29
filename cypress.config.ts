import { defineConfig } from 'cypress';

import * as dotenv from 'dotenv';

const fs = require('fs');

const { verifyDownloadTasks } = require('cy-verify-downloads');

dotenv.config({
  path: process.env.NODE_ENV_TEST === 'develop' ? '.env.dev' : '.env',
});

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    reportDir: './reports',
    reportPageTitle: 'Ms8 Report',
    reportTitle: 'Report Mocha',
  },
  e2e: {
    video: false,
    viewportWidth: 1600,
    viewportHeight: 900,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 5,
    excludeSpecPattern: '*.js',
    pageLoadTimeout: 10000,
    defaultCommandTimeout: 10000,
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',

    async setupNodeEvents(on, config) {
      require('cypress-failed-log/on')(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', verifyDownloadTasks);
      on('task', {
        readFileMaybe(filename) {
          if (fs.existsSync(filename)) {
            return true;
          }

          return false;
        },
      });
    },
  },
  env: {
    AWS_AMPLYF: {
      COGNITO_CLIENT_APP_ID: process.env.COGNITO_CLIENT_APP_ID,
      COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
      COGNITO_REGION: process.env.COGNITO_REGION,
      COGNITO_CLIENT_APP_ID_PROD: process.env.COGNITO_CLIENT_APP_ID_PROD,
      COGNITO_USER_POOL_ID_PROD: process.env.COGNITO_USER_POOL_ID_PROD,
    },

    USERS: {
      user: '..',
      pass: '...',
    },

    ROUTERS: {
      rota1: '..',
    },

    TAGS: 'not @ignore',
  },
});
