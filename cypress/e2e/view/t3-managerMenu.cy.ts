import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER);
  });

  it('Open menu with mouseover', () => {
    cy.menuItem('1').realHover().should('have.text', menuItem.manager.operations);
  });

  it('Management menu', () => {
    cy.menuItem('2').realHover().should('have.text', menuItem.manager.manager).click();
    cy.subitem('1').should('have.text', menuItem.manager.entity);
    cy.subitem('2').should('have.text', menuItem.manager.user);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem('3').realHover().should('have.text', menuItem.manager.intermediation).click();
    cy.href(Cypress.env('ROUTERS').intermadiation_fees).should(
      'have.text',
      menuItem.manager.intermediation_fees,
    );
  });

  it('Config menu', () => {
    cy.menuItem('4').realHover().should('have.text', menuItem.manager.config).click();
    cy.href(Cypress.env('ROUTERS').integration).should('have.text', menuItem.manager.integration);
  });
});
