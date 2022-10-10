import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_INVESTOR);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem('1').realHover().should('have.text', menuItem.investor.panel);
  });

  it('Investor menu', () => {
    cy.menuItem('2').realHover().should('have.text', menuItem.investor.manager).click();
    cy.href(Cypress.env('ROUTERS').fees).should('have.text', menuItem.investor.fees);
    cy.href(Cypress.env('ROUTERS').operations_summary).should('have.text', menuItem.investor.operations);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem('3').realHover().should('have.text', menuItem.manager.intermediation).click();
  });
});
