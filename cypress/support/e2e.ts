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
import './commands/services/user/researchUsers.service';

// front
import './commands/screens/enterprise';
import './commands/screens/general';
import './commands/screens/home';
import './commands/screens/login';
import './commands/screens/operationsSummary';
import './commands/screens/integrations';

// service-commom
import './commands/helpers/baseUrl.control';

// general
import './commands/helpers/router.control';
import './commands/helpers/wait.control';

require('cypress-grep')();
require('cy-verify-downloads').addCustomCommand();

Cypress.Server.defaults({
  delay: 500,
  force404: false,

});
