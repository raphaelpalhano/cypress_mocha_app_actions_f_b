Cypress.Commands.add('getAllIntermediationsFees', () => {
  cy.requestWithoutBody('GET', 'operations/api/v1/intermediation-fees');
});

Cypress.Commands.add('getOneIntermedationsFees', (id: string) => {
  cy.requestWithoutBody(`GET`, `operations/api/v1/intermediation-fees/${id}`);
});

Cypress.Commands.add('postIntermedationsFees', (body: object) => {
  cy.requestWithBody(`POST`, `operations/api/v1/intermediation-fees`, body);
});
