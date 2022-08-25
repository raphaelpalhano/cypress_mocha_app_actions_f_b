before(() => {
  cy.changeBaseUrl('serverRest');
  cy.log(Cypress.env('ambiente'));
});

describe('listando todos usuarios', { tags: '@developed' }, () => {
  beforeEach('Capturando response', () => {
    cy.getAllUsers().then((res) => {
      cy.wrap(res).as('Response');
    });
  });

  it('Validando quantidade de usuarios', () => {
    cy.get('@Response').then((res) => {
      expect(res.body.quantidade).eq(1);
      // console.log(res);
    });
  });
});
