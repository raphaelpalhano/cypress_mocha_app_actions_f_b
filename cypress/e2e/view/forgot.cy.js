import { ForgotPage } from '../../support/pageobject/pages/ForgotPage';
import { LoginPage } from '../../support/pageobject/pages/LoginPage';
import forgot from '../../fixtures/static/forgot.json';

before(() => {
  cy.changeBaseUrl('UI-MS8');
  cy.routerGenerator();
});

describe('Login na plataforma ms8', () => {
  beforeEach('Acessando pagina para trocar a senha', () => {
    LoginPage.goToLogin();
    LoginPage.validWelcome();
    ForgotPage.goToForgot();
    ForgotPage.validForgot();
  });

  it('Mudando a senha com e-mail invalido', { tags: '@developed' }, () => {
    ForgotPage.setEmail(forgot.invalido.email);
    cy.alertMessage();
  });

  it('Mudando a senha após apagar o e-mail digitado no campo', { tags: '@developed' }, () => {
    ForgotPage.setEmail(forgot.invalido.email);
    ForgotPage.clearInput();
    cy.alertMessage();
  });

  it('Mudando a senha com e-mail valido', { tags: '@developed' }, () => {
    ForgotPage.setEmail(forgot.valido.email);
  });
});
