describe('Given the operator want see market status', { tags: '@api' }, function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('supplier');
    cy.getEntityId().then((entityId) => {
      cy.getSupplierInfo('suppliers', entityId).then((supplier) => {
        cy.wrap(supplier.body.document).as('documentSupplier');
        cy.wrap(supplier.body.bankAccounts[0].id).as('bankId');
      });
    });
  });

  beforeEach('Given generation of entries for operation', function () {
    const formobject = {
      key: 'enterpriseId',
      value: '5e5e9bbb-f0ce-4d9f-b4b4-85361372c90b',
    };
    cy.uploadInvoices('invoices/upload-file', 'upload/invoices.csv', formobject).then((res) => {
      expect(res.status).to.be.eq(201);
    });

    cy.uploadFees('0dc9055a-5480-4577-857e-3e3fefb3318c/upload-fee-file', 'upload/fees.xlsx').then((res) => {
      expect(res.status).to.be.eq(201);
      expect(res.statusText).to.be.eq('Created');
    });

    cy.postOperations('orders', { document: this.documentSupplier }).then((res) => {
      cy.wrap(res.body.id).as('operationId');
      expect(res.status).to.be.eq(201);
      cy.schemaValidation('operations/createNewOrder.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });

  it('When I submit the operation', function () {
    cy.submitOrder('orders', this.operationId, { bankAccountId: this.bankId, orderId: this.operationId }).then((res) => {
      expect(res.status).to.be.eq(204);
    });
  });

  it('When I get a list orders', function () {
    cy.getOperations('orders').then((res) => {
      expect(res.status).to.be.eq(200);
      console.log(res);
      cy.schemaValidation('operations/listOrders.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });
});
