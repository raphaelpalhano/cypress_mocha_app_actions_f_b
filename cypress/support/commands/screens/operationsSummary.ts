import '@testing-library/cypress/add-commands';
const datelocal = Date.now();
const today = new Date(datelocal);

Cypress.Commands.add('table', (value) => {
  return cy.get(`tr :nth-child(${value}) .flex .text-sm`);
});

Cypress.Commands.add('validTime', () => {
  cy.wait(10000);
  cy.get('header div div span')
    .invoke('text')
    .then((time) => {
      const paneltime = time.substring(18, 23);
      const localtime = today.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      });

      expect(localtime).to.be.equal(paneltime);
    });
});

Cypress.Commands.add('validDate', () => {
  cy.get('[data-testid="section-title"] strong')
    .invoke('text')
    .then((date) => {
      const paneldate = date.substring(0, 8);
      const localdate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });

      expect(localdate).to.be.equal(paneldate);
    });
});
