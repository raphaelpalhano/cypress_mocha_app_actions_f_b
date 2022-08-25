import breakPoint from '../../../fixtures/static/breakPointText.json';
import generalLocator from '../locators/general.locator';

export class ForgotPage {
  static goToForgot() {
    generalLocator.HREF(Cypress.env('forgotPass')).click();
  }

  static validForgot() {
    cy.validRoute(Cypress.env('forgotPass'));
    generalLocator.WELCOME().should('have.text', breakPoint.forgotPassword).screenshot();
  }

  static setEmail(email) {
    generalLocator.INPUT('email').type(email);
  }

  static clearInput() {
    generalLocator.INPUT('email').clear();
  }

  static submit() {
    generalLocator.BUTTON().click();
  }

  static validButton() {
    generalLocator.BUTTON().should('be.disabled');
  }
}
