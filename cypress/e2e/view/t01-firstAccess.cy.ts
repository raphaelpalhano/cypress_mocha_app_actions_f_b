import * as newUser from '../../fixtures/static/firstAccess.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';
import * as message from '../../fixtures/static/modalMessage.json';

describe('Go first access', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_FIST_ACCESS, Cypress.env('USERS').OTP_PASS);
    cy.welcome().should('have.text', breakPoint.welcomeFirstAccess);
  });

  it.skip('Fist access form', () => {
    cy.input('password').should('be.visible');
    cy.input('passwordConfirmation').should('be.visible');
    cy.dataId('visibility-icon').click({ multiple: true });
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Password invalid', () => {
    cy.input('password').type(newUser.inv_pass.newpass);
    cy.input('passwordConfirmation').type(newUser.inv_pass.confirmpass);
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Different passwords', () => {
    cy.input('password').type(newUser.diff_pass.newpass);
    cy.input('passwordConfirmation').type(newUser.diff_pass.confirmpass);
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Mandatory new password', () => {
    cy.input('password').type(newUser.valid.newpass);
    cy.input('passwordConfirmation').type(newUser.valid.confirmpass);
    cy.input('password').clear();
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Mandatory confirm password', () => {
    cy.input('password').type(newUser.valid.newpass);
    cy.input('passwordConfirmation').type(newUser.valid.confirmpass);
    cy.input('passwordConfirmation').clear();
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Mandatory passwords', () => {
    cy.input('password').type(newUser.valid.newpass);
    cy.input('passwordConfirmation').type(newUser.valid.confirmpass);
    cy.input('password').clear();
    cy.input('passwordConfirmation').clear();
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Valid data', () => {
    cy.input('password').type(newUser.valid.newpass);
    cy.input('passwordConfirmation').type(newUser.valid.confirmpass);
    cy.elementType('submit').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.dataId('menu-list').should('be.visible');
  });
});
