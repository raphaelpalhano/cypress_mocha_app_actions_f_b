Cypress.Commands.add('waitAuth', () => {
  cy.wait('@auth', { timeout: 15000 }).get('img[alt="Logo"]');
});
