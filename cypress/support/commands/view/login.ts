import * as breakPoint from '../../../fixtures/static/breakPoint.json';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('openBrowser', () => {
  cy.visit(Cypress.env('frontend'));
  cy.get('div h2').should('have.text', breakPoint.welcomeMessage);
});

Cypress.Commands.add('login', (username, password) => {
  cy.input('username').type(username);
  cy.input('password').type(password);
  cy.button().click({ force: true });
});

Cypress.Commands.add('logout', () => {
  cy.dataId('logout-button').click({ force: true });
  cy.get('div h2').should('have.text', breakPoint.welcomeMessage);
});
