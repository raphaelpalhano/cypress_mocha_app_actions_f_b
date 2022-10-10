
import * as menuItem from '../../fixtures/static/menuItem.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';


describe('Painel de Integraçoes', () => {
    beforeEach('Acessando o Painel de integraçoes', () => {
        cy.openBrowser();
        cy.validRoute(Cypress.env('ROUTERS').login);
        cy.login(Cypress.env('USERS').USER_MANAGER);
        cy.menuItem('2').realHover().should('have.text', menuItem.manager.manager)
        .click({ force: true });
        cy.subitem('1')
        .should('have.text', menuItem.manager.entity)
        .click({ force: true });
        cy.href(Cypress.env('ROUTERS').register).should('have.text', menuItem.manager.registry).realClick()
        cy.href(Cypress.env('ROUTERS').registry_entity).should('have.text','NovaEmpresa').click();
        cy.dataId('page-title').should('have.text', breakPoint.fillRegistry).realMouseUp();

    });

    it.skip('Cadastrando uma empresa com todos dados válidos', { tags: '@developed' }, () => {
      cy.inputEnterpriseData('valido');
      cy.uploadEnterpriseFiles();
      cy.companyAdress('valido');
      cy.legalResponsible('valido');
      cy.uploadLegalResponsiblesFiles();
      cy.submitForm();
      cy.successMessage();
    });
  
    it('Cadastrando uma empresa com todos dados válidos', { tags: '@developed' }, () => {
      cy.inputEnterpriseData('valido');
      cy.uploadEnterpriseFiles();
      cy.companyAdress('valido');
      cy.legalResponsible('valido');
      cy.uploadLegalResponsiblesFiles();
      cy.submitForm();
      cy.errorMessage();
    });
  
    it('Cadastrando uma empresa com dados da empresa invalido', { tags: '@developed' }, () => {
      cy.inputEnterpriseData('empresa_invalido');
      cy.alertMessage();
    });
  
    it('Cadastrando uma empresa endereço invalido', { tags: '@developed' }, () => {
      cy.companyAdress('endereco_invalido');
      cy.alertMessage();
    });
  
    it('Cadastrando uma empresa endereço responsável menor de 18', { tags: '@developed' }, () => {
      cy.legalResponsible('responsavel_invalido');
      cy.alertMessage();
    });
  });
  
  