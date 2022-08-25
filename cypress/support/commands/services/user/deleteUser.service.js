/// <reference types="../../../" />

Cypress.Commands.add('deleteUser', (id) => {
  cy.requestWithoutBodyButParam('DELETE', 'admin/user', id, { 'Content-Type': 'application/json' });
});
