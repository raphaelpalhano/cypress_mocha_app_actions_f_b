import { LoginPage } from '../../support/pageobject/pages/LoginPage';

before(() => {
  cy.changeBaseUrl('UI-MS8');
  cy.routerGenerator();
});

describe('Login na plataforma ms8', () => {
  beforeEach('Acessando a pltaforma', () => {
    LoginPage.goToLogin();
    LoginPage.validWelcome();
  });

  it('Validando elementos do login', { tags: '@developed' }, () => {
    LoginPage.credentialsComponents();
  });

  it('Validandolinks', { tags: '@developed' }, () => {
    LoginPage.validLinks();
  });

  it('Efetua login com sucesso', { tags: '@developed' }, () => {
    LoginPage.setCredentials('valido');
    LoginPage.seePassword();
    LoginPage.submitLogin();
    LoginPage.validHomepage();
  });
});
