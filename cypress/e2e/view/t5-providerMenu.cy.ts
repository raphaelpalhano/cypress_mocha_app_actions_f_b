import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.intercept('POST', '/proxy/auth/api/v1/auth/token/decode').as('auth');
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_PROVIDER);
    cy.waitAuth();
  });

  it('Open menu with mouseover', () => {
    cy.menuItem('Gestão').realHover().should('have.text', menuItem.investor.manager);
  });

  it('Provider menu', () => {
    cy.menuItem('Gestão').realHover().should('have.text', menuItem.provider.manager).click();
    cy.href(Cypress.env('ROUTERS').operations_summary).should('have.text', menuItem.provider.operations);
  });
});
