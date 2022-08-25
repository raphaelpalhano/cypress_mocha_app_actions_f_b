/// <reference types="../../../" />

Cypress.Commands.add('createUser', (type) => {
  cy.requestWithBodyAndHeader('POST', 'admin/users', FactoryUsers.getUser(type), { 'Content-Type': 'application/json' });
});
