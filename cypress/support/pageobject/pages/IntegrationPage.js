import generalLocator from '../locators/general.locator';
import breakPoint from '../../../fixtures/static/breakPointText.json';
import message from '../../../fixtures/static/successMessage.json';
import integration from '../../../factory/integration';
import integrationLocator from '../locators/integration.locator';

export class IntegrationPage {
  static validIntegrationList() {
    cy.validRoute(Cypress.env('integration'));
    generalLocator.DATATEST('page-title').should('have.text', breakPoint.integrationsPanel).screenshot();
  }

  static openForm() {
    generalLocator.HREF(Cypress.env('')).click();
  }

  static validForm() {
    cy.validRoute(Cypress.env('integration_create'));
    generalLocator.WELCOME().should('have.text', breakPoint.integrationForm);
  }

  static createIntegration(typeIntegration) {
    const data = integration.typesIntegrations(typeIntegration);
    generalLocator.INPUT('name').type(data.name);
    generalLocator.INPUT('credentials.0.key').type(data.credential);
    generalLocator.DATATEST('select-credential-type').click();
    integrationLocator.TYPEKEY(data.type).click();
    generalLocator.INPUT('credentials.0.value').type(data.key);
  }

  static submitIntegration() {
    generalLocator.BUTTON().click();
  }

  static successMessage() {
    generalLocator.DIALOG().should('have.text', message.integration).as('dialog');
    cy.get('@dialog').screenshot();
  }

  static cancelModal() {
    generalLocator.DATATEST('alert-modal-cancel-btn').click();
  }
}
