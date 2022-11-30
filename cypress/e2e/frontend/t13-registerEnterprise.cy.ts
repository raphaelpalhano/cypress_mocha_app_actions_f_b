describe('Painel de Integraçoes', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
    cy.pageRegisterEnterprise();
  });

  it.skip('Create enterprise', () => {
    cy.inputEnterpriseData('valid');
    cy.uploadEnterpriseFiles();
    cy.companyAdress('valid');
    cy.legalResponsible('valid');
    cy.uploadLegalResponsiblesFiles();
    cy.submitForm();
    cy.successMessage();
  });

  it.skip('Error to create enterprise ', () => {
    cy.inputEnterpriseData('valid');
    cy.uploadEnterpriseFiles();
    cy.companyAdress('valid');
    cy.legalResponsible('valid');
    cy.uploadLegalResponsiblesFiles();
    cy.submitForm();
    cy.errorMessage();
  });

  it.skip('Invalid enterprise data', () => {
    cy.inputEnterpriseData('invalid_enterprise');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Invalid enterprise address', () => {
    cy.companyAdress('invalid_address');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Invalid resposible data', () => {
    cy.legalResponsible('invalid_resposible');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });
});
