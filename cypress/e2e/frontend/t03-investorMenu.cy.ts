import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login('investor');
  });

  it('Open menu with mouseover', () => {
    cy.menuItem(menuItem.investor.panel).realHover().should('have.text', menuItem.investor.panel);
  });

  it('Investor menu', () => {
    cy.menuItem(menuItem.investor.manager).realHover().should('have.text', menuItem.investor.manager).click({ force: true });
    cy.href(Cypress.env('ROUTERS').operations_summary).should('have.text', menuItem.investor.operations);
    cy.href(Cypress.env('ROUTERS').term).should('have.text', menuItem.investor.term);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem(menuItem.investor.intermediation).realHover().should('have.text', menuItem.investor.intermediation).click({ force: true });
    cy.subitem(menuItem.investor.fees_limits).should('have.text', menuItem.investor.fees_limits);
  });
});
