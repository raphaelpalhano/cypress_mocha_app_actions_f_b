import * as fees from '../../fixtures/static/intermediationFees.json';
import * as message from '../../fixtures/static/modalMessage.json';
import * as submitButton from '../../fixtures/static/submitButton.json';

describe('Go intermediation fees', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
    cy.pageInvoiceIntermetation();
  });

  it('Fee form', () => {
    cy.dataId('select-enterprise').should('be.visible');
    cy.dataId('upload-button').should('be.visible');
    cy.input('fee').should('be.visible');
    cy.dataId('update-button').should('have.text', submitButton.intermediation);
  });

  it('Register min fee', () => {
    cy.input('fee').clear();
    cy.input('fee').type(fees.ui.minFees);
    cy.dataId('update-button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.input('fee').should('have.value', `${fees.ui.minFees}%`);
  });

  it('Register max fee', () => {
    cy.input('fee').clear();
    cy.input('fee').type(fees.ui.maxFees);
    cy.dataId('update-button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.input('fee').should('have.value', `${fees.ui.maxFees}%`);
  });

  it('Invalid fee', () => {
    cy.input('fee').clear();
    cy.input('fee').type(fees.ui.negative);
    cy.alertMessage();
    cy.dataId('update-button').should('be.disabled');
  });

  it('Negative intermediation', () => {
    cy.input('fee').type(fees.ui.negative);
    cy.input('fee').clear();
    cy.alertMessage();
    cy.dataId('update-button').should('be.disabled');
  });
});
