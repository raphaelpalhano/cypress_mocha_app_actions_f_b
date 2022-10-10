

Cypress.Commands.add('validFormIntegration', () => {
    cy.validRoute(Cypress.env('ROUTERS').integration_create);
    cy.input('name').should('be.visible');
    cy.get('input[name*="key"]').should('be.visible');
    cy.dataId('select-credential-type').should('be.visible');
    cy.get('input[name*="value"]').should('be.visible');
    cy.dataId('add-credential').should('be.visible');
    cy.elementType('button').should('be.disabled');
    cy.elementType('submit').should('be.disabled');
})

Cypress.Commands.add('cancelModal', () => {
  return cy.dataId('alert-modal-cancel-btn');

})



Cypress.Commands.add('removeAllIntegration', () => {
  cy.get('body').then(element => {
    if(element.find('button[data-testid="alert-modal-cancel-btn"]').length > 0){
      cy.cancelModal().click();
      cy.get('tbody').each(($row) => {
        if ($row.find('tr').length > 0) {
          cy.wrap($row.find('tr')).each((td) => {
            cy.wrap(td.find('td > div')).within(() => {
              cy.get('button').click();
            });
            cy.get('button[data-testid="alert-modal-confirm-btn"]').click();
          });
        }
      });
    }
  })
   
  
  
})