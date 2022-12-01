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
    frontend: 'https://cf-banco-fidis-master-ui-ms8.digital-nonprod.fcalatam.com.br',
    api: 'https://8xbha0ib2d.execute-api.us-east-1.amazonaws.com/proxy/',
    cognito: 'https://cognito-idp.us-east-1.amazonaws.com/',
    TOKEN_BAREAR: process.env.TOKEN_BAREAR,

    AWS_AMPLYF: {
      COGNITO_CLIENT_APP_ID: process.env.COGNITO_CLIENT_APP_ID,
      COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
      COGNITO_REGION: process.env.COGNITO_REGION,
    },

    USERS: {
      USER_BACK_INVESTOR: 'investidor_back_test@mailinator.com',
      USER_BACK_SUPPLIER: 'fornecedor_back_test@mailinator.com',
      USER_BACK_MANAGER: 'gestor_back_test@mailinator.com',
      USER_MANAGER: 'alline.domingos@avenuecode.com',
      USER_INVESTOR: 'investor.qa@mailinator.com',
      USER_SUPPLIER: 'supplier.qa@mailinator.com',
      USER_INVALID: 'automation@mailinator.com',
      USER_FIST_ACCESS: 'manager.qa@mailinator.com',
      OTP_PASS: '#eL9vLkL',
      MANAGER_PASS: 'Ali257@si',
      SUPPLIER_PASS: 'Teste@1234',
      INVESTOR_PASS: 'Teste@123',
      PASS_BACK: 'backBack55221@',
      INVALID_PASS: '123456@S',
    },

    ROUTERS: {
      home: 'dashboard',
      login: 'login',
      forgotPass: 'login/forgot-password',
      firstAccess: 'login/first-access',
      integration: 'integrations',
      intermadiation_fees: 'register-invoice-and-intermediation',
      integration_create: 'integrations/create',
      fees: 'upload-fees-and-register-limits',
      operations_summary: 'operations-summary',
      register: 'register-entity',
      registry_entity: 'register-entity/enterprise',
      fees_and_limits: 'upload-fees-and-register-limits',
      term: 'order-assignment-terms',
    },

    TAGS: 'not @ignore',
  },
});
