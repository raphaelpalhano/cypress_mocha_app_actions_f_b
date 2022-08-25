Cypress.Commands.add('validRoute', (route) => {
  cy.url().should('be.equal', `${Cypress.config().baseUrl}/${route}`);
});
