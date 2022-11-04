Cypress.Commands.add('getListOfEnterprises', (endpoint: string) => {
  cy.requestWithoutBody(`GET`, `enterprises/api/v1/${endpoint}`);
});
