/// <reference types="../../../" />

Cypress.Commands.add('updateUser', (id) => {
  cy.requestWithBodyAndParamAndHeader('PATCH', 'admin/user', FactoryUsers.getUserUpdate(), id, { 'Content-Type': 'application/json' });
});
