import * as menuItem from '../../../fixtures/static/menuItem.json';
import * as breakPoint from '../../../fixtures/static/breakPoint.json';
import * as action from '../../../fixtures/static/submitButton.json';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('pageFeesLimits', () => {
  cy.menuItem(menuItem.investor.intermediation).realHover().click({ force: true });
  cy.subitem(menuItem.investor.fees_limits).should('have.text', menuItem.investor.fees_limits).click({ force: true });
  cy.validRoute(Cypress.env('ROUTERS').fees_and_limits);
  cy.dataId('page-title').should('have.text', breakPoint.uploadfees).realMouseUp();
});

Cypress.Commands.add('pageOrderApproved', () => {
  cy.dataId('order-status-card').should('be.visible');
  cy.dataId('approve-or-pay-button').should('be.visible');
  cy.dataId('refuse-or-cancel-button').should('be.visible');
  cy.orderAction(action.approved).click({ force: true });
});

Cypress.Commands.add('pageOrderPaid', () => {
  cy.dataId('order-status-card').should('be.visible');
  cy.dataId('approve-or-pay-button').should('be.visible');
  cy.dataId('refuse-or-cancel-button').should('be.visible');
  cy.orderAction(action.paid).click({ force: true });
});
