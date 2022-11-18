import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem(menuItem.manager.operations).realHover().should('have.text', menuItem.manager.operations);
  });

  it('Management menu', () => {
    cy.menuItem(menuItem.manager.manager).realHover().click();
    cy.subitem(menuItem.manager.entity).should('have.text', menuItem.manager.entity);
    cy.subitem(menuItem.manager.user).should('have.text', menuItem.manager.user);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem(menuItem.manager.intermediation).realHover().should('have.text', menuItem.manager.intermediation).click();
    cy.href(Cypress.env('ROUTERS').intermadiation_fees).should('have.text', menuItem.manager.intermediation_fees);
  });

  it('Config menu', () => {
    cy.menuItem(menuItem.manager.config).realHover().should('have.text', menuItem.manager.config).click();
    cy.href(Cypress.env('ROUTERS').integration).should('have.text', menuItem.manager.integration);
  });
});
