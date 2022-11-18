describe('User operation the intermediation fees', { tags: '@api' }, function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('investor');
  });

  it('I want upload invoices in operations service', function () {
    cy.uploadFees('0dc9055a-5480-4577-857e-3e3fefb3318c/upload-fee-file', 'upload/fees.xlsx').then((res) => {
      console.log(res);
      expect(res.status).to.be.eq(201);
      expect(res.statusText).to.be.eq('Created');
    });
  });
});
