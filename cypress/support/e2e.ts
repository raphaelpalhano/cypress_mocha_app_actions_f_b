// This example support/index.js is processed and
// ***********************************************************
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import plugins
import 'cypress-failed-log';
import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';
import 'cypress-file-upload';
import 'cypress-real-events/support';

// backend
import './commands/helpers/schema.validation';
import './commands/helpers/request.service';
import './commands/services/rest.service';
import './commands/services/operations.service';
import './commands/services/suppliers.service';
import './commands/helpers/auth.service';
import './commands/services/enterprieses.service';
import './commands/services/bff.service';
import './commands/services/integrations.service';
import './commands/services/investors.service';

// front
import './commands/view/enterprise';
import './commands/view/general';
import './commands/view/home';
import './commands/view/login';
import './commands/view/operationsSummary';
import './commands/view/integrations';
import './commands/view/menuInvestor';
import './commands/view/menuManager';

// service-commom

// general
import './commands/helpers/router.control';
import { controlEnv } from './commands/helpers/baseUrl.control';
import './commands/helpers/string.control';
import './commands/helpers/file.control';

require('cypress-grep')();
require('cy-verify-downloads').addCustomCommand();

Cypress.Server.defaults({
  delay: 500,
  force404: false,
});

controlEnv();
