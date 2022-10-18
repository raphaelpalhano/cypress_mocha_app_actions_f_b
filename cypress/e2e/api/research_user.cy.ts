before(() => {
  cy.log(Cypress.env('ambiente'));
});

describe('listando todos usuarios', { tags: '@api' }, () => {
  it('Validando quantidade de usuarios', () => {
    console.log(process.env.grepTags);
    console.log(Cypress.config('baseUrl'));
  });
});
