Cypress.Commands.add('uploadFees', (endpoint: string, filePath: string) => {
  cy.requestFormData('POST', `investors/api/v1/investors/${endpoint}`, filePath, 'file', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', {});
});
