import { defineConfig } from 'cypress';

import * as dotenv from 'dotenv';
const { verifyDownloadTasks } = require('cy-verify-downloads');


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
    baseUrl: 'https://cf-banco-fidis-master-ui-ms8.digital-nonprod.fcalatam.com.br',
    video: true,
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
      require('cypress-grep/src/plugin')(config);
      require('cypress-failed-log/on')(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', verifyDownloadTasks);

    },
  },
  env: {
    BASESERVER: 'UI-MS8',
    USERS: {
      USER_MANAGER: 'gestor',
      USER_INVESTOR: 'investidor',
      USER_PROVIDER: 'fornecedor',
      USER_INVALID: 'automation',
      PASSWORD: process.env.PASSWORD
    },

    ROUTERS:{
      home: 'dashboard',
      login: 'login',
      forgotPass: 'login/forgot-password',
      firstAccess: 'login/first-access',
      integration: 'integrations',
      intermadiation_fees: 'register-invoice-and-intermediation',
      integration_create: 'integrations/create',
      fees: 'upload-fees',
      operations_summary: 'operations-summary',
      register: 'register-entity',
      registry_entity: 'register-entity/enterprise'
    },

    TAGS: 'not @ignore',

    grepFilterSpecs: true,

    serverRest: 'https://serverest.dev',
  },
});
