import * as path from '../../fixtures/static/path.json';
import * as message from '../../fixtures/static/modalMessage.json';

describe('Go upload fees', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_INVESTOR, Cypress.env('USERS').INVESTOR_PASS);
    cy.pageFeesLimits();
  });

  it('Upload fees page', () => {
    cy.dataId('upload-button').should('be.visible');
    cy.dataId('download-model-button').should('be.visible');
  });

  it('Template donwload', () => {
    cy.dataId('download-model-button').should('be.visible').click();
    cy.verifyDownload('.xlsx', { contains: true });
  });

  it('Correct upload', () => {
    cy.elementType('file').selectFile(path.feesFile, { force: true });
    cy.modal(message.waitUpload);
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
  });

  it('Incorrect upload', () => {
    cy.elementType('file').selectFile(path.wrongFile, { force: true });
    cy.modal(message.waitUpload);
    cy.modal(message.feesError);
    cy.dataId('alert-modal-confirm-btn').click();
  });
});
