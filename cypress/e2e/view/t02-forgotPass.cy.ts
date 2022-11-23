import * as user from '../../fixtures/static/forgotPass.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';

describe('Go forgot password', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.href(Cypress.env('ROUTERS').forgotPass).click();
    cy.validRoute(Cypress.env('ROUTERS').forgotPass);
  });

  it.skip('Page of forgot password', () => {
    cy.welcome().should('have.text', breakPoint.forgotPassword);
    cy.input('email').should('be.visible');
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Email invalid', () => {
    cy.input('email').type(user.invalid.email);
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  it.skip('Email valid', () => {
    cy.input('email').type(user.valid.email);
    cy.elementType('submit').should('be.enabled');
  });
});
