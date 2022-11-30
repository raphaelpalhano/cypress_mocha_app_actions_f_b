import * as breakPoint from '../../fixtures/static/breakPoint.json';

describe('Go login', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
  });

  it('Login form', () => {
    cy.input('username').should('be.visible');
    cy.input('password').should('be.visible');
    cy.dataId('visibility-icon').should('be.visible');
    cy.elementType('button').should('be.disabled');
    cy.elementType('submit').should('be.disabled');
  });

  it('Login in with Manager', () => {
    cy.login(Cypress.env('USERS').USER_MANAGER, Cypress.env('USERS').MANAGER_PASS);
    cy.dataId('page-title').should('have.text', breakPoint.managerHome);
  });

  it('Login in with Investor', () => {
    cy.login(Cypress.env('USERS').USER_INVESTOR, Cypress.env('USERS').INVESTOR_PASS);
    cy.dataId('page-title').should('have.text', breakPoint.investorHome);
  });

  it('Login in with Provider', () => {
    cy.login(Cypress.env('USERS').USER_SUPPLIER, Cypress.env('USERS').SUPPLIER_PASS);
    cy.dataId('page-title').should('have.text', breakPoint.supplierHome);
  });

  it('Invalid user', () => {
    cy.login(Cypress.env('USERS').USER_INVALID, Cypress.env('USERS').SUPPLIER_PASS);
    cy.alertMessage();
  });

  it('Invalid password', () => {
    cy.login(Cypress.env('USERS').USER_SUPPLIER, Cypress.env('USERS').INVALID_PASS);
    cy.alertMessage();
  });

  it('Mandatory username', () => {
    cy.input('username').type(Cypress.env('USERS').USER_SUPPLIER);
    cy.input('password').type(Cypress.env('USERS').SUPPLIER_PASS);
    cy.input('username').clear();
    cy.elementType('submit').should('be.disabled');
    cy.alertMessage();
  });

  it('Mandatory password', () => {
    cy.input('username').type(Cypress.env('USERS').USER_SUPPLIER);
    cy.input('password').type(Cypress.env('USERS').SUPPLIER_PASS);
    cy.input('password').clear();
    cy.elementType('submit').should('be.disabled');
    cy.alertMessage();
  });

  it('Mandatory credentials', () => {
    cy.input('username').type(Cypress.env('USERS').USER_SUPPLIER);
    cy.input('password').type(Cypress.env('USERS').SUPPLIER_PASS);
    cy.input('username').clear();
    cy.input('password').clear();
    cy.elementType('submit').should('be.disabled');
    cy.alertMessage();
  });
});
