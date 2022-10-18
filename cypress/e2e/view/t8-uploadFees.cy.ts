import * as menuItem from '../../fixtures/static/menuItem.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';
import * as message from '../../fixtures/static/modalMessage.json';

describe('Go upload fees', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.intercept('POST', '/proxy/auth/api/v1/auth/token/decode').as('auth');
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_INVESTOR);
    cy.waitAuth();

    cy.menuItem('Gestão').realHover().should('have.text', menuItem.manager.manager).click();
    cy.href(Cypress.env('ROUTERS').fees).should('have.text', menuItem.manager.fees).click();
    cy.validRoute(Cypress.env('ROUTERS').fees);
    cy.dataId('page-title').should('have.text', breakPoint.uploadfees).realMouseUp();
  });

  it('Upload fees page', () => {
    cy.dataId('upload-button').should('be.visible');
    cy.dataId('download-model-button').should('be.visible');
  });

  it('Template donwload', () => {
    cy.dataId('download-model-button').should('be.visible').click();
    cy.verifyDownload('template-taxas-investidores.xlsx', { contains: true });
  });

  it.skip('Correct upload', () => {
    cy.dataId('upload-button').attachFile('upload/fees.xlsx');
    cy.role('dialog').should('be.visible');
    cy.get('h2[id*="headlessui-dialog"]').should('have.text', message.waitUpload);
  });

  it.skip('Incorrect upload', () => {
    cy.dataId('upload-button').selectFile('upload/wrong.xlsx');
    cy.role('dialog').should('be.visible');
    cy.get('h2[id*="headlessui-dialog"]').should('have.text', message.feesError);
  });
});
