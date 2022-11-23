import * as limit from '../../fixtures/static/limits.json';
import * as message from '../../fixtures/static/modalMessage.json';

describe('Go register limits', { tags: '@frontend' }, () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_INVESTOR, Cypress.env('USERS').INVESTOR_PASS);
    cy.pageFeesLimits();
  });

  it('Upload fees and limits form', () => {
    cy.dataId('upload-button').should('be.visible');
    cy.dataId('download-model-button').should('be.visible');
    cy.input('limit').should('be.visible');
    cy.dataId('register-limits-button').should('be.visible');
  });

  it('Register min limit', () => {
    cy.input('limit').clear();
    cy.input('limit').type(limit.minLimits);
    cy.dataId('register-limits-button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.input('limit').should('have.value', `R$ ${limit.minLimits}`);
  });

  it('Register max limit', () => {
    cy.input('limit').clear();
    cy.input('limit').type(limit.maxLimits);
    cy.dataId('register-limits-button').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('alert-modal-confirm-btn').click();
    cy.input('limit').should('have.value', `R$ 9.999.999.999,99`);
  });

  it('Invalid limit', () => {
    cy.input('limit').type(limit.minLimits);
    cy.input('limit').clear();
    cy.alertMessage();
    cy.dataId('register-limits-button').should('be.disabled');
  });

  it('Negative limit', () => {
    cy.input('limit').clear();
    cy.input('limit').type(limit.negative);
    cy.alertMessage();
    cy.dataId('register-limits-button').should('be.disabled');
  });
});
