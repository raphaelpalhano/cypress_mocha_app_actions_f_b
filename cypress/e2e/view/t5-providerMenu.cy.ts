import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_PROVIDER);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem('1').realHover().should('have.text', menuItem.investor.manager);
  });

  it('Investor menu', () => {
    cy.menuItem('1').realHover().should('have.text', menuItem.provider.manager).click();
    cy.href(Cypress.env('ROUTERS').operations_summary).should('have.text', menuItem.provider.operations);
  });
});
