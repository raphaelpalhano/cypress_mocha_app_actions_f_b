before(() => {
  cy.changeBaseUrl('serverRest');
  cy.log(Cypress.env('ambiente'));
});

describe.skip('listando todos usuarios', { tags: '@developed' }, () => {
  beforeEach('Capturando response', () => {
    cy.getAllUsers().then((res: any) => {
      cy.wrap(res).as('Response');
    });
  });

  it('Validando quantidade de usuarios', () => {
    cy.get('@Response').then((res: any) => {
      expect(res.body.quantidade).eq(1);
      // console.log(res);
    });
  });
});
