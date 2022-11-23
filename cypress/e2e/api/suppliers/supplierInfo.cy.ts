import * as suppliers from '../../../fixtures/static/config/suppliers.json';

describe('Given the operator want supplier informations', { tags: '@api' }, function () {
  before('Given my authentication with supplier', () => {
    cy.authSystem('supplier');
  });

  it('When I have valid id', () => {
    cy.getSupplierInfo('suppliers', suppliers.id).then((supplier) => {
      expect(supplier.body.status).to.be.eq('APPROVED');
      expect(supplier.status).to.be.eq(200);
      cy.schemaValidation('suppliers/getSupplierInfo.json', supplier.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });

  it('When I have invalid id', () => {
    cy.getSupplierInfo('suppliers', '768533de').then((supplier) => {
      expect(supplier.status).to.be.eq(404);
      cy.schemaValidation('suppliers/getInvalidSupplierInfo.json', supplier.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });
});
