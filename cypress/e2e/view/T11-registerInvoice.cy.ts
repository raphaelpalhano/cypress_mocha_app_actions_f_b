import * as message from '../../fixtures/static/modalMessage.json';
import * as enterprise from '../../fixtures/static/enterprises.json';
import * as path from '../../fixtures/static/path.json';

describe('Go register intermediation', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
    cy.pageInvoiceIntermetation();
  });

  it('Invoice and intermediation form', () => {
    cy.dataId('select-enterprise').should('be.visible');
    cy.dataId('upload-button').should('be.disabled');
    cy.input('fee').should('be.visible');
    cy.dataId('update-button').should('be.visible');
  });

  it('Upload invoice', () => {
    cy.dataId('select-enterprise').click();
    cy.contains(enterprise.t1).click();
    cy.elementType('file').should('be.enabled').selectFile(path.invoiceFile, { force: true });
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
  });

  it('Invalid upload', () => {
    cy.dataId('select-enterprise').click();
    cy.contains(enterprise.t1).click();
    cy.elementType('file').should('be.enabled').selectFile(path.feesFile, { force: true });
    cy.modal(message.feesError);
    cy.dataId('alert-modal-confirm-btn').click();
  });
});
