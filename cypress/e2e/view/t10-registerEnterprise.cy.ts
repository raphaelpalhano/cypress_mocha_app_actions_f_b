describe('Painel de Integraçoes', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
    cy.pageRegisterEnterprise();
  });

  it('Create enterprise', () => {
    cy.inputEnterpriseData('valid');
    cy.uploadEnterpriseFiles();
    cy.companyAdress('valid');
    cy.legalResponsible('valid');
    cy.uploadLegalResponsiblesFiles();
    cy.submitForm();
    cy.successMessage();
  });

  it('Error to create enterprise ', () => {
    cy.inputEnterpriseData('valid');
    cy.uploadEnterpriseFiles();
    cy.companyAdress('valid');
    cy.legalResponsible('valid');
    cy.uploadLegalResponsiblesFiles();
    cy.submitForm();
    cy.errorMessage();
  });

  it('Invalid enterprise data', () => {
    cy.inputEnterpriseData('invalid_enterprise');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it('Invalid enterprise address', () => {
    cy.companyAdress('invalid_address');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it('Invalid resposible data', () => {
    cy.legalResponsible('invalid_resposible');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });
});
