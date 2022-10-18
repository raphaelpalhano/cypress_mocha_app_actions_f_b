import * as menuItem from '../../fixtures/static/menuItem.json';

describe('Nav to menu', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER);
    cy.waitAuth();
  });

  it('Open menu with mouseover', () => {
    cy.menuItem('Operações').realHover().should('have.text', menuItem.manager.operations);
  });

  it('Management menu', () => {
    cy.menuItem('Gestão').realHover().should('have.text', menuItem.manager.manager).click();
    cy.subitem('Entidades').should('have.text', menuItem.manager.entity);
    cy.subitem('Usuários').should('have.text', menuItem.manager.user);
  });

  it('Intermediation fees menu', () => {
    cy.menuItem('Insumos e Leilão').realHover().should('have.text', menuItem.manager.intermediation).click();
    cy.href(Cypress.env('ROUTERS').intermadiation_fees).should(
      'have.text',
      menuItem.manager.intermediation_fees,
    );
  });

  it('Config menu', () => {
    cy.menuItem('Configurações').realHover().should('have.text', menuItem.manager.config).click();
    cy.href(Cypress.env('ROUTERS').integration).should('have.text', menuItem.manager.integration);
  });
});
