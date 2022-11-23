import * as investor from '../../../fixtures/static/config/investors.json';

describe('User operation the intermediation fees', { tags: '@api' }, function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('investor');
  });

  it('I want upload invoices in operations service', function () {
    cy.uploadFees(`${investor.id}/upload-fee-file`, 'upload/fees.xlsx').then((res) => {
      console.log(res);
      expect(res.status).to.be.eq(201);
      expect(res.statusText).to.be.eq('Created');
    });
  });
});
