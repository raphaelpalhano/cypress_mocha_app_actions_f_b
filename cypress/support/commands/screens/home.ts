import * as breakPoint from '../../../fixtures/static/breakPoint.json';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('openBrowser', () => {
  cy.visit('/');
  cy.get('div h2').should('have.text', breakPoint.welcomeMessage);
});
