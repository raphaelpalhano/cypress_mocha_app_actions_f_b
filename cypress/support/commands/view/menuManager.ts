import * as menuItem from '../../../fixtures/static/menuItem.json';
import * as breakPoint from '../../../fixtures/static/breakPoint.json';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('pageIntegrations', () => {
  cy.menuItem(menuItem.manager.config).realHover().should('have.text', menuItem.manager.config).click({ force: true });
  cy.href(Cypress.env('ROUTERS').integration).should('have.text', menuItem.manager.integration).click({ force: true });
  cy.validRoute(Cypress.env('ROUTERS').integration);
  cy.dataId('page-title').should('have.text', breakPoint.integrationsPanel).realMouseUp();
});

Cypress.Commands.add('pageInvoiceIntermetation', () => {
  cy.menuItem(menuItem.manager.intermediation).realHover().should('have.text', menuItem.manager.intermediation).click({ force: true });
  cy.href(Cypress.env('ROUTERS').intermadiation_fees).should('have.text', menuItem.manager.intermediation_fees).click({ force: true });
  cy.validRoute(Cypress.env('ROUTERS').intermadiation_fees);
  cy.dataId('page-title').should('have.text', breakPoint.intermediation).realMouseUp();
});

Cypress.Commands.add('pageRegisterEnterprise', () => {
  cy.menuItem(menuItem.manager.manager).realHover().should('have.text', menuItem.manager.manager).click({ force: true });
  cy.subitem(menuItem.manager.entity).should('have.text', menuItem.manager.entity).click({ force: true });
  cy.href(Cypress.env('ROUTERS').register).should('have.text', menuItem.manager.registry).realClick();
  cy.href(Cypress.env('ROUTERS').registry_entity).should('have.text', 'NovaEmpresa').click();
  cy.dataId('page-title').should('have.text', breakPoint.fillRegistry).realMouseUp();
});
