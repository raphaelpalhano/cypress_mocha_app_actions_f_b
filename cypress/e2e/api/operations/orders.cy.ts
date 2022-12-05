import * as operations from '../../../fixtures/static/config/operations.json';
import * as enterprises from '../../../fixtures/static/config/enterprise.json';
import * as investor from '../../../fixtures/static/config/investors.json';

describe('Given the operator want see market status', function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('supplier');
    cy.getEntityId().then((entityId) => {
      cy.getSupplierInfo('suppliers', entityId).then((supplier) => {
        cy.wrap(supplier.body.document).as('documentSupplier');
        cy.wrap(supplier.body.bankAccounts[0].id).as('bankId');
      });
    });
    cy.getListOfEnterprises('enterprises').then((res) => {
      cy.wrap(res.body.data[0].document).as('enterpriseDocument');
      cy.wrap(res.body.data[0].id).as('enterpriseID');
    });

    cy.getInvestors('').then((res) => {
      cy.wrap(res.body.data[0].id).as('investorsId');
    });
  });

  beforeEach('Given generation of entries for operation', function () {
    const formobject = {
      key: 'enterpriseId',
      value: enterprises.enpterprises[0].id,
    };

    const bodyInvestor = {
      enterpriseId: this.enterpriseID,
      limit: 10000000,
    };

    cy.authSystem('investor')
      .uploadFees(`${investor.id}/upload-fee-file`, 'upload/fees.xlsx')
      .then((res) => {
        expect(res.status).to.be.eq(201);
        expect(res.statusText).to.be.eq('Created');
      });

    cy.uploadInvoices('invoices/upload-file', 'upload/invoicesBack.csv', formobject).then((res) => {
      expect(res.status).to.be.eq(201);
    });

    cy.postInvestors(`${this.investorsId}/limits`, { enterpriseId: this.enterpriseID, limit: 10000000 }).then((res) => {
      expect(res.status).to.be.eq(201);
      console.log(res.body);
      cy.patchInvestors(`${res.body.investorId}/limits/${res.body.id}`, bodyInvestor).then((response) => {
        expect(response.status).to.be.eq(200);
      });
    });

    cy.authSystem('supplier')
      .postOperations('orders', { document: this.documentSupplier })
      .then((res) => {
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

  it('When investor paid operation', function () {
    cy.postOperations(`orders/${this.operationId}/update-status`, { status: operations.status.APPROVED }).then((res) => {
      expect(res.status).to.be.eq(204);
    });
    cy.postOperations(`orders/${this.operationId}/update-payment`, { status: operations.status.PAID }).then((res) => {
      expect(res.status).to.be.eq(204);
    });
  });

  it('When investor reject operation', function () {
    cy.postOperations(`orders/${this.operationId}/update-status`, { status: operations.status.NOT_APPROVED }).then((res) => {
      expect(res.status).to.be.eq(204);
    });
  });

  it('When investor cancel operation and list all operations', function () {
    cy.postOperations(`orders/${this.operationId}/update-status`, { status: operations.status.APPROVED }).then((res) => {
      expect(res.status).to.be.eq(204);
    });
    cy.postOperations(`orders/${this.operationId}/update-payment`, { status: operations.status.CANCELLED }).then((res) => {
      expect(res.status).to.be.eq(204);
    });

    cy.getOperations('orders').then((res) => {
      expect(res.status).to.be.eq(200);
      cy.schemaValidation('operations/listOrders.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });
});
