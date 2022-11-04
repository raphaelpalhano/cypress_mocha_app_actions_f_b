describe('Given the operator want supplier informations', { tags: '@api' }, function () {
  before('Given my authentication with supplier', () => {
    cy.authSystem('supplier');
  });

  it('When I have valid id', () => {
    cy.getListOfEnterprises('enterprises').then((res) => {
      expect(res.body.data).length.above(0);
      expect(res.status).to.be.eq(200);
      cy.schemaValidation('enterprises/listEnterprises.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });
});
