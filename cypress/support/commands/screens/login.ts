import '@testing-library/cypress/add-commands';

const password = Cypress.env('USERS').PASSWORD;

Cypress.Commands.add('login', (username) => {
  cy.input('username').type(username);
  cy.input('password').type(password);
  cy.button().click();
});
