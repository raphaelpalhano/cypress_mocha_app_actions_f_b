import * as breakPoint from '../../fixtures/static/breakPoint.json';
import * as menuItem from '../../fixtures/static/menuItem.json';
import * as fees from '../../fixtures/static/intermediationFees.json';
import * as message from '../../fixtures/static/modalMessage.json';
import * as submitButton from '../../fixtures/static/submitButton.json';

describe('Go intermediation fees', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER);
    cy.menuItem('3')
      .realHover()
      .should('have.text', menuItem.manager.intermediation)
      .click({ force: true });
    cy.href(Cypress.env('ROUTERS').intermadiation_fees)
      .should('have.text', menuItem.manager.intermediation_fees)
      .click({ force: true });
    cy.validRoute(Cypress.env('ROUTERS').intermadiation_fees);
    cy.dataId('page-title').should('have.text', breakPoint.intermediation).realMouseUp();
  });

  it('Fee form', () => {
    cy.dataId('upload-button').should('be.visible');
    cy.input('fee').should('be.visible');
    cy.get('form > button').should('have.text', submitButton.intermediation);
  });

  it('Register min fee', () => {
    cy.input('fee').clear();
    cy.input('fee').type(fees.minFees);
    cy.get('form > button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.input('fee').should('have.value', fees.minFees + '%');
  });

  it('Register max fee', () => {
    cy.input('fee').clear();
    cy.input('fee').type(fees.maxFees);
    cy.get('form > button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.input('fee').should('have.value', fees.maxFees + '%');
  });

  it('Invalid fee', () => {
    cy.input('fee').clear();
    cy.input('fee').type(fees.negative);
    cy.alertMessage();
    cy.get('form > button').should('be.disabled');
  });

  it('Null fee', () => {
    cy.input('fee').type(fees.negative);
    cy.input('fee').clear();
    cy.alertMessage();
    cy.get('form > button').should('be.disabled');
  });
});
