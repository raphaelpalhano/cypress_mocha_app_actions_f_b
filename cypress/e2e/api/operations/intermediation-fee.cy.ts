import * as fees from '../../../fixtures/static/intermediationFees.json';

before(() => {
  cy.log(Cypress.env('ambiente'));
});

describe('User operation the intermediation fees', { tags: '@api' }, () => {
  it('Given I create a new intermedation fees with max value', () => {
    cy.postIntermedationsFees(fees.api.max).then((res) => {
      expect(res.body.fee).equal('99.9999999');
    });
  });

  it('Given I get a list the intermedation fees', () => {
    cy.getAllIntermediationsFees().then((res) => {
      expect(res.body.data).length.above(1);
    });
  });
});
