import * as breakPoint from '../../fixtures/static/breakPoint.json';

describe('Go login', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
  });

  it('Login in with Manager', () => {
    cy.login(Cypress.env('USERS').USER_MANAGER);
    cy.waitAuth();
    cy.dataId('page-title').should('have.text', breakPoint.managerHome);
  });

  it('Login in with Investor', () => {
    cy.login(Cypress.env('USERS').USER_INVESTOR);
    cy.waitAuth();
    cy.contains(breakPoint.investorHome);
  });

  it('Login in with Provider', () => {
    cy.login(Cypress.env('USERS').USER_PROVIDER);
    cy.waitAuth();
    cy.contains(breakPoint.providerHome);
  });

  it('Invalid login', () => {
    cy.login(Cypress.env('USERS').USER_INVALID);
    cy.alertMessage();
  });
});
