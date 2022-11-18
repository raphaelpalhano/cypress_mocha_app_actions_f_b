import * as operations from '../../../fixtures/static/config/operations.json';
import * as enterprises from '../../../fixtures/static/config/enterprise.json';

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
      value: enterprises.enpterprises[0].id,
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
      cy.submitOrder('orders', res.body.id, { bankAccountId: this.bankId, orderId: this.operationId }).then((response) => {
        expect(response.status).to.be.eq(204);
      });
    });
  });

  it('When I have investor paid for operation', function () {
    cy.postOperations(`orders/${this.operationId}/update-status`, { status: operations.status.APPROVED }).then((res) => {
      expect(res.status).to.be.eq(204);
    });
    cy.postOperations(`orders/${this.operationId}/update-payment`, { status: operations.status.PAID }).then((res) => {
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
