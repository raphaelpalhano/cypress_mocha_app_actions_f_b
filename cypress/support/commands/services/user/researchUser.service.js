/// <reference types="../../../" />

Cypress.Commands.add('getAllUsers', () => {
  cy.requestWithoutBody('GET', '/usuarios');
});

Cypress.Commands.add('getUserId', (id) => {
  cy.requestWithoutBody(`GET`, `/admin/user/${id}`);
});
