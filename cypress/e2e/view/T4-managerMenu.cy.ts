import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_INVESTOR, Cypress.env('USERS').INVESTOR_PASS);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem(menuItem.investor.panel).realHover().should('have.text', menuItem.investor.panel);
  });

  it('Investor menu', () => {
    cy.menuItem(menuItem.investor.manager)
      .realHover()
      .should('have.text', menuItem.investor.manager)
      .click();
    cy.href(Cypress.env('ROUTERS').operations_summary).should(
      'have.text',
      menuItem.investor.operations,
    );
  });

  it('Intermediation fees menu', () => {
    cy.menuItem(menuItem.investor.intermediation)
      .realHover()
      .should('have.text', menuItem.investor.intermediation)
      .click();
  });
});
