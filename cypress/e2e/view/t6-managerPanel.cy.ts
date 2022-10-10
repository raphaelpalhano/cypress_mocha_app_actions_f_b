import * as operations from '../../fixtures/static/operationsValue.json';

describe('Go to manager panel', () => {
  beforeEach(() => {
    cy.openBrowser();
    cy.validRoute(Cypress.env('ROUTERS').login);
    cy.login(Cypress.env('USERS').USER_MANAGER);
  });

  it('Summary of operations', () => {
    cy.dataId('section-title');
    cy.validTime();
    cy.validDate();
    cy.contains('Atualizar');
    cy.get('button[id*="headlessui"]').click({ multiple: true });
    cy.contains(operations.enterprise);
    cy.contains(operations.avaliable);
    cy.contains(operations.negotiated);
    cy.contains(operations.onApproval);
    cy.contains(operations.approved);
    cy.contains(operations.refused);
    cy.contains(operations.paid);
    cy.contains('Exportar');
  });
});
