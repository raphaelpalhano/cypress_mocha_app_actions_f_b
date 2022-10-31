import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_PROVIDER, Cypress.env('USERS').PROVIDER_PASS);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem(menuItem.investor.manager)
      .realHover()
      .should('have.text', menuItem.investor.manager);
  });

  it('Investor menu', () => {
    cy.menuItem(menuItem.investor.manager)
      .realHover()
      .should('have.text', menuItem.provider.manager)
      .click();
    cy.href(Cypress.env('ROUTERS').operations_summary).should(
      'have.text',
      menuItem.provider.operations,
    );
  });
});
