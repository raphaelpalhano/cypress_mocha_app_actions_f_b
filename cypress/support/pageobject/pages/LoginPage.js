import generalLocator from '../locators/general.locator';
import breakPoint from '../../../fixtures/static/breakPointText.json';
import login from '../../../factory/login';

export class LoginPage {
  static goToLogin() {
    cy.visit('/');
  }

  static validWelcome() {
    generalLocator.WELCOME().should('have.text', breakPoint.welcomeMessage);
  }

  static credentialsComponents() {
    generalLocator.INPUT('username').should('be.visible');
    generalLocator.INPUT('password').should('be.visible');
    generalLocator.DATATEST('visibility-icon').should('be.visible');
    generalLocator.BUTTON().should('be.disabled');
  }

  static validLinks() {
    generalLocator.HREF(Cypress.env('firstAccess')).should('be.visible').screenshot();
    generalLocator.HREF(Cypress.env('forgotPass')).should('be.visible').screenshot();
  }

  static setCredentials(typeUser) {
    const data = login.getUserToLogin(typeUser);
    generalLocator.INPUT('username').type(data.user);
    generalLocator.INPUT('password').type(data.password);
    generalLocator.ROOT().screenshot();
  }

  static seePassword() {
    generalLocator.DATATEST('visibility-icon').click();
  }

  static submitLogin() {
    generalLocator.BUTTON().click();
  }

  static validHomepage() {
    cy.contains('Home').screenshot();
  }
}
