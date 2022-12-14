Cypress.Commands.add('getOperations', (endpoint: string) => {
  cy.requestWithoutBody('GET', `op/ap/v1/${endpoint}`);
});

Cypress.Commands.add('getOneOperations', (endpoint: string, id: number) => {
  cy.requestWithoutBody(`GET`, `op/ap/v1/${endpoint}/${id}`);
});

Cypress.Commands.add('postOperations', (endpoint: string, body: object) => {
  cy.requestWithBody(`POST`, `op/ap/v1/${endpoint}`, body);
});

Cypress.Commands.add('deleteOperations', (endpoint: string, id: string) => {
  cy.requestWithoutBody(`DELETE`, `op/ap/v1/${endpoint}/${id}`);
});

Cypress.Commands.add('patchOperations', (endpoint: string, id: string, body: object) => {
  cy.requestWithBody(`PATCH`, `op/ap/v1/${endpoint}/${id}`, body);
});

Cypress.Commands.add('updateOperations', (endpoint: string, id: string, body: object) => {
  cy.requestWithBody(`PUT`, `operations/api/v1/${endpoint}/${id}`, body);
});

Cypress.Commands.add('uploadInvoices', (endpoint: string, filePath: string, formObject: object) => {
  cy.requestFormData('POST', `op/ap/v1/${endpoint}`, filePath, 'file', 'text/csv', formObject);
});

Cypress.Commands.add('submitOrder', (endpoint: string, orderId: string, body: object) => {
  cy.requestWithBody(`POST`, `op/ap/v1/${endpoint}/${orderId}/submit`, body);
});
