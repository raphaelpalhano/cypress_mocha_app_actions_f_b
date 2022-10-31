import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', (username, password) => {
  cy.intercept('POST', '/proxy/auth/api/v1/auth/token/decode').as('auth');

  cy.input('username').type(username);
  cy.input('password').type(password);
  cy.button().click();

  cy.wait('@auth', { timeout: 15000 }).get('img[alt="Logo"]');
});
