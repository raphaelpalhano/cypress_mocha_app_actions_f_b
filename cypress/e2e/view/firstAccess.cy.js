import { FirstAccessPage } from '../../support/pageobject/pages/FirstAccessPage';
import { LoginPage } from '../../support/pageobject/pages/LoginPage';

before(() => {
  cy.changeBaseUrl('UI-MS8');
  cy.routerGenerator();
});

describe('Login na plataforma ms8', () => {
  beforeEach('Acessando a pltaforma', () => {
    LoginPage.goToLogin();
    FirstAccessPage.goToFA();
    FirstAccessPage.validFA();
  });

  it('Primeiro acesso com email invalido', { tags: '@developed' }, () => {
    FirstAccessPage.fillForm('email_invalido');
    FirstAccessPage.seePass();
    cy.alertMessage();
    FirstAccessPage.validSubmit();
  });

  it('Primeiro acesso com password fora do padrao de segurança', { tags: '@developed' }, () => {
    FirstAccessPage.fillForm('password_invalido');
    cy.alertMessage();
    FirstAccessPage.seePass();
    FirstAccessPage.validSubmit();
  });

  it('Primeiro acesso com password fora do padrao de segurança', { tags: '@developed' }, () => {
    FirstAccessPage.fillForm('password_diferente');
    cy.alertMessage();
    FirstAccessPage.seePass();
    FirstAccessPage.validSubmit();
  });
});
