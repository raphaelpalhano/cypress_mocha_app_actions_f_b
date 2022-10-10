import * as breakPoint from '../../fixtures/static/breakPoint.json';

describe('Go login', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
  });

  afterEach(() => {
    cy.screenshot();
  });

  it('Login in with Manager', () => {
    cy.login(Cypress.env('USERS').USER_MANAGER);
    cy.dataId('page-title').should('have.text', breakPoint.managerHome);
  });

  it('Login in with Investor', () => {
    cy.login(Cypress.env('USERS').USER_INVESTOR);
    cy.contains(breakPoint.investorHome);
  });

  it('Login in with Provider', () => {
    cy.login(Cypress.env('USERS').USER_PROVIDER);
    cy.contains(breakPoint.providerHome);
  });

  it.skip('Invalid login', () => {
    cy.login(Cypress.env('USERS').USER_INVALID);
    cy.alertMessage();
  });
});
