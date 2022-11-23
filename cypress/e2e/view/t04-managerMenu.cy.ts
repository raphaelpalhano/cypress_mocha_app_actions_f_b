import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem(menuItem.manager.panel).realHover().should('have.text', menuItem.manager.panel);
  });

  it('Management menu', () => {
    cy.menuItem(menuItem.manager.manager).realHover().click({ force: true });
    cy.href(Cypress.env('ROUTERS').term).should('have.text', menuItem.manager.term);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem(menuItem.manager.intermediation).realHover().should('have.text', menuItem.manager.intermediation).click({ force: true });
    cy.href(Cypress.env('ROUTERS').intermadiation_fees).should('have.text', menuItem.manager.intermediation_fees);
  });
});
