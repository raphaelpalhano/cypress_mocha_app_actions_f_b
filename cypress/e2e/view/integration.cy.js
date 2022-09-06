import { IntegrationPage } from '../../support/pageobject/pages/IntegrationPage';
import { LateralMenu } from '../../support/pageobject/pages/LateralMenu';
import { LoginPage } from '../../support/pageobject/pages/LoginPage';

before(() => {
  cy.changeBaseUrl('UI-MS8');
  cy.routerGenerator();
});

describe('Painel de Integraçoes', () => {
  beforeEach('Acessando o Painel de integraçoes', () => {
    LoginPage.goToLogin();
    LoginPage.setCredentials('valido');
    LoginPage.submitLogin();
    LateralMenu.validNav();
    LateralMenu.navIntegration();
    IntegrationPage.validIntegrationList();
  });

  it('Cadastrado valido da integraçao do tipo URL', { tags: '@developed' }, () => {
    IntegrationPage.openForm();
    IntegrationPage.createIntegration('url_valido');
    IntegrationPage.submitIntegration();
    IntegrationPage.successMessage();
  });

  it('Cadastrado invalido da integraçao do tipo URL', { tags: '@developed' }, () => {
    IntegrationPage.openForm();
    IntegrationPage.createIntegration('url_invalido');
    cy.alertMessage();
  });

  it('Cadastrando integraçao e voltando para o painel', { tags: '@developed' }, () => {
    IntegrationPage.openForm();
    IntegrationPage.createIntegration('url_valido');
    IntegrationPage.submitIntegration();
    IntegrationPage.cancelModal();
    IntegrationPage.validIntegrationList();
  });

  it('Cadastrando integraçao do tipo texto', { tags: '@developed' }, () => {
    IntegrationPage.openForm();
    IntegrationPage.createIntegration('texto_valido');
    IntegrationPage.submitIntegration();
    IntegrationPage.successMessage();
  });

  after('Limpando as integrações', () => {
    IntegrationPage.removeAllIntegration();
  });
});
