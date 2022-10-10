import * as newUser from '../../fixtures/static/firstAccess.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';

describe('Go first access', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.href(Cypress.env('ROUTERS').firstAccess).click();
    cy.validRoute(Cypress.env('ROUTERS').firstAccess);
  });

  it('Page of first access', () => {
    cy.welcome().should('have.text', breakPoint.welcomeFirstAccess);
    cy.input('email').should('be.visible');
    cy.input('otp').should('be.visible');
    cy.input('password').should('be.visible');
    cy.input('passwordConfirmation').should('be.visible');
    cy.dataId('visibility-icon').click({ multiple: true });
    cy.elementType('submit').should('be.disabled');
  });

  it('Valid data', () => {
    cy.input('email').type(newUser.valid.email);
    cy.input('otp').type(newUser.valid.otp);
    cy.input('password').type(newUser.valid.newpass);
    cy.input('passwordConfirmation').type(newUser.valid.confirmpass);
    cy.elementType('submit').should('be.enabled');
  });

  it('Email invalid', () => {
    cy.input('email').type(newUser.inv_email.email);
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it('Password invalid', () => {
    cy.input('email').type(newUser.inv_pass.email);
    cy.input('otp').type(newUser.inv_pass.otp);
    cy.input('password').type(newUser.inv_pass.newpass);
    cy.input('passwordConfirmation').type(newUser.inv_pass.confirmpass);
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it('Different passwords', () => {
    cy.input('email').type(newUser.diff_pass.email);
    cy.input('otp').type(newUser.diff_pass.otp);
    cy.input('password').type(newUser.diff_pass.newpass);
    cy.input('passwordConfirmation').type(newUser.diff_pass.confirmpass);
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });
});
