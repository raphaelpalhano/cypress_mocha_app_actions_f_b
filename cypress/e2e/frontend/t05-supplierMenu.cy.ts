import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_SUPPLIER, Cypress.env('USERS').SUPPLIER_PASS);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem(menuItem.supplier.panel).realHover().should('have.text', menuItem.supplier.panel);
  });

  it('Supplier menu', () => {
    cy.menuItem(menuItem.supplier.manager).realHover().should('have.text', menuItem.supplier.manager).click({ force: true });
    cy.href(Cypress.env('ROUTERS').operations_summary).should('have.text', menuItem.supplier.operations);
    cy.href(Cypress.env('ROUTERS').term).should('have.text', menuItem.supplier.term);
  });
});
