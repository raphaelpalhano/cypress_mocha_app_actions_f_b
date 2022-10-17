import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.intercept('POST', '/proxy/auth/api/v1/auth/token/decode').as('auth');
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_INVESTOR);
    cy.waitAuth();
  });

  it('Open menu with mouseover', () => {
    cy.menuItem('Painel Inicial').realHover().should('have.text', menuItem.investor.panel);
  });

  it('Investor menu', () => {
    cy.menuItem('Gestão').realHover().should('have.text', menuItem.investor.manager).click();
    cy.href(Cypress.env('ROUTERS').fees).should('have.text', menuItem.investor.fees);
    cy.href(Cypress.env('ROUTERS').operations_summary).should('have.text', menuItem.investor.operations);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem('Insumos e Leilão').realHover().should('have.text', menuItem.manager.intermediation).click();
  });
});
