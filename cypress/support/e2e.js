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
import registerCypressGrep from 'cypress-grep';
import 'cypress-file-upload';

// backend
import './commands/helpers/schema.validation';
import './commands/helpers/request.service';
import './commands/services/common/rest.service';
import './commands/services/user/researchUser.service';

// service-commom
import './commands/helpers/baseUrl.control';

// general
import './commands/helpers/router.control';
import './commands/helpers/alert.validation';
import './commands/helpers/elements.validation';
import './commands/helpers/tags.control';
import './commands/helpers/file.control';

registerCypressGrep();

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  whitelist: () => true,
});
