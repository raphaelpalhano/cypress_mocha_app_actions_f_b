import generalLocator from '../locators/general.locator';
import breakPoint from '../../../fixtures/static/breakPointText.json';
import firstAccess from '../../../factory/firstAccess';

export class FirstAccessPage {
  static goToFA() {
    generalLocator.HREF(Cypress.env('firstAccess')).click();
  }

  static validFA() {
    cy.validRoute(Cypress.env('firstAccess'));
    generalLocator.WELCOME().should('have.text', breakPoint.welcomeFirstAccess).screenshot();
  }

  static clickInput() {
    generalLocator.INPUT('email').click();
  }

  static validSubmit() {
    generalLocator.BUTTON().should('be.disabled').screenshot();
  }

  static fillForm(type) {
    const data = firstAccess.userFirstAccess(type);
    generalLocator.INPUT('email').type(data.email);
    generalLocator.INPUT('otp').type(data.otp);
    generalLocator.INPUT('password').type(data.newpass);
    generalLocator.INPUT('passwordConfirmation').type(data.confirmpass);
  }

  static seePass() {
    generalLocator.DATATEST('visibility-icon').click({ multiple: true });
    generalLocator.ROOT().screenshot();
  }

  static submitBtn() {
    generalLocator.BUTTON().click();
  }
}
