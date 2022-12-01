import * as enterprise from '../../fixtures/static/enterprises.json';
import * as path from '../../fixtures/static/path.json';
import * as message from '../../fixtures/static/modalMessage.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';
import * as invoiceData from '../../fixtures/static/invoiceData.json';

describe('Manager, supplier and investor flow for anticipation', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.createInvoiceCsv(invoiceData.document);
  });

  it('Upload fees as a manager', () => {
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
    cy.pageInvoiceIntermetation();
    cy.pageUploadInvoices(enterprise.t1, path.csv);
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click({ force: true });
    cy.logout();
  });

  it('Anticipate as a supplier', () => {
    cy.login(Cypress.env('USERS').USER_SUPPLIER, Cypress.env('USERS').SUPPLIER_PASS);
    cy.dataId('page-title').should('have.text', breakPoint.supplierHome);
    cy.dataId('create-order-button').should('be.enabled').click();
    cy.dataId('order-card').contains(breakPoint.boardTitle);
    cy.dataId('create-order-button').should('be.disabled');
    cy.dataId('submit-order-button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click({ force: true });
    cy.dataId('submit-order-button').should('be.disabled');
    cy.dataId('create-order-button').should('be.disabled');
    cy.logout();
  });

  it('Approve and pay as an investor', () => {
    cy.login(Cypress.env('USERS').USER_INVESTOR, Cypress.env('USERS').INVESTOR_PASS);
    cy.dataId('page-title').should('have.text', breakPoint.investorHome);
    cy.pageOrderApproved();
    cy.modal(message.aproveOrder);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.pageOrderPaid();
    cy.modal(message.paidOrder);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click({ force: true });
    cy.logout();
  });
});
