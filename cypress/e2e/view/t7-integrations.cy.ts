import * as integration from '../../fixtures/static/integrations.json';
import * as breakPoint from '../../fixtures/static/breakPoint.json';
import * as menuItem from '../../fixtures/static/menuItem.json';
import * as message from '../../fixtures/static/modalMessage.json';
import * as integrationName from '../../factory/dynamicData';
import * as submitButton from '../../fixtures/static/submitButton.json';

describe('Go to Integrations', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.intercept('POST', '/proxy/auth/api/v1/auth/token/decode').as('auth');
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER);
    cy.waitAuth();
    cy.menuItem('Configurações').realHover().should('have.text', menuItem.manager.config).click();
    cy.href(Cypress.env('ROUTERS').integration).should('have.text', menuItem.manager.integration).click();
    cy.validRoute(Cypress.env('ROUTERS').integration);
    cy.dataId('page-title').should('have.text', breakPoint.integrationsPanel).realMouseUp();
  });

  it('Create new integration type URL', () => {
    cy.href(Cypress.env('ROUTERS').integration_create)
      .should('have.text', submitButton.integration)
      .click({ force: true });
    cy.validFormIntegration();
    cy.input('name').type(integrationName.integrationName());
    cy.get('input[name*="key"]').type(integration.url.credential);
    cy.dataId('select-credential-type').click();
    cy.contains(integration.url.type).click();
    cy.get('input[name*=".value"]').type(integration.url.key);
    cy.elementType('submit').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('page-title').should('have.text', breakPoint.integrationsPanel);
  });

  it('Create new integration type text', () => {
    cy.href(Cypress.env('ROUTERS').integration_create)
      .should('have.text', submitButton.integration)
      .click({ force: true });
    cy.validRoute(Cypress.env('ROUTERS').integration_create);
    cy.input('name').type(integrationName.integrationName());
    cy.get('input[name*="key"]').type(integration.text.credential);
    cy.dataId('select-credential-type').click();
    cy.contains(integration.text.type).click();
    cy.get('input[name*=".value"]').type(integration.text.key);
    cy.elementType('submit').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('page-title').should('have.text', breakPoint.integrationsPanel);
  });

  it('Create new integration type pass', () => {
    cy.href(Cypress.env('ROUTERS').integration_create)
      .should('have.text', submitButton.integration)
      .click({ force: true });
    cy.validRoute(Cypress.env('ROUTERS').integration_create);
    cy.input('name').type(integrationName.integrationName());
    cy.get('input[name*="key"]').type(integration.pass.credential);
    cy.dataId('select-credential-type').click();
    cy.contains(integration.pass.type).click();
    cy.get('input[name*=".value"]').type(integration.pass.key);
    cy.elementType('submit').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('page-title').should('have.text', breakPoint.integrationsPanel);
  });

  it('Create new integration type date', () => {
    cy.href(Cypress.env('ROUTERS').integration_create)
      .should('have.text', submitButton.integration)
      .click({ force: true });
    cy.validRoute(Cypress.env('ROUTERS').integration_create);
    cy.input('name').type(integrationName.integrationName());
    cy.get('input[name*="key"]').type(integration.date.credential);
    cy.dataId('select-credential-type').click();
    cy.contains(integration.date.type).click();
    cy.get('input[name*=".value"]').type(integration.date.key);
    cy.elementType('submit').should('be.enabled').click();
    cy.modal(message.success);
    cy.dataId('page-title').should('have.text', breakPoint.integrationsPanel);
  });

  it('Url invalid', () => {
    cy.href(Cypress.env('ROUTERS').integration_create)
      .should('have.text', submitButton.integration)
      .click({ force: true });
    cy.validRoute(Cypress.env('ROUTERS').integration_create);
    cy.input('name').type(integrationName.integrationName());
    cy.get('input[name*="key"]').type(integration.url.credential);
    cy.dataId('select-credential-type').click();
    cy.contains(integration.url.type).click();
    cy.get('input[name*=".value"]').type('www.teste.aut');
    cy.alertMessage();
    cy.elementType('submit').should('be.disabled');
  });

  afterEach('Clean all integrations', () => {
    cy.removeAllIntegration();
  });
});