import * as menuItem from '../../../fixtures/static/menuItem.json';
import * as breakPoint from '../../../fixtures/static/breakPoint.json';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('pageFeesLimits', () => {
  cy.menuItem(menuItem.investor.intermediation).realHover().click();
  cy.href(Cypress.env('ROUTERS').fees_and_limits).should('have.text', menuItem.investor.fees_limits).click({ force: true });
  cy.validRoute(Cypress.env('ROUTERS').fees_and_limits);
  cy.dataId('page-title').should('have.text', breakPoint.uploadfees).realMouseUp();
});
