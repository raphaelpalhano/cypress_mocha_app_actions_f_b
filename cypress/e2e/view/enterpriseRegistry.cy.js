import { EnterpriseRegistryPage } from '../../support/pageobject/pages/EnterpriseRegistryPage';
import { LateralMenu } from '../../support/pageobject/pages/LateralMenu';
import { LoginPage } from '../../support/pageobject/pages/LoginPage';
import { RegistryProfilePage } from '../../support/pageobject/pages/RegistryProfilePage';

before(() => {
  cy.changeBaseUrl('UI-MS8');
  cy.routerGenerator();
});

describe('Painel de Integraçoes', () => {
  beforeEach('Acessando o Painel de integraçoes', () => {
    LoginPage.goToLogin();
    LoginPage.setCredentials('valido');
    LoginPage.submitLogin();
    LateralMenu.newProfile();
    RegistryProfilePage.acessEnterprise();
  });

  it('Cadastrando uma empresa com todos dados válidos', { tags: '@developed' }, () => {
    EnterpriseRegistryPage.inputEnterpriseData('valido');
    EnterpriseRegistryPage.uploadEnterpriseFiles();
    EnterpriseRegistryPage.companyAdress('valido');
    EnterpriseRegistryPage.legalResponsible('valido');
    EnterpriseRegistryPage.uploadLegalResponsiblesFiles();
    EnterpriseRegistryPage.submitForm();
    EnterpriseRegistryPage.successMessage();
  });

  it('Cadastrando uma empresa com dados da empresa invalido', { tags: '@developed' }, () => {
    EnterpriseRegistryPage.inputEnterpriseData('empresa_invalido');
    cy.alertMessage();
  });

  it('Cadastrando uma empresa endereço invalido', { tags: '@developed' }, () => {
    EnterpriseRegistryPage.companyAdress('endereco_invalido');
    cy.alertMessage();
  });

  it('Cadastrando uma empresa endereço responsável menor de 18', { tags: '@developed' }, () => {
    EnterpriseRegistryPage.legalResponsible('responsavel_invalido');
    cy.alertMessage();
  });
});
