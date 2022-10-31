import { escape } from 'querystring';

describe('User operation the intermediation fees', { tags: '@api' }, function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('manager');
  });

  it('I want upload invoices in operations service', function () {
    cy.uploadInvoices('invoices/upload-file', 'upload/invoices.csv').then((res) => {
      expect(res.status).to.be.eq(201);
    });
  });

  it('Given that the manager uploaded invoices have invalid date', function () {
    cy.uploadInvoices('invoices/upload-file', 'upload/invoices_invalid_date.csv').then((res) => {
      cy.convertArrayBinaryToString(res.body, 'latin1').then((resDecode) => {
        expect(resDecode.statusCode).to.be.eq(400);
        expect(resDecode.message).to.be.eq('Data de vencimento inválida.');
      });
    });
  });

  it('Given that the manager uploaded invoices have invalid template', function () {
    cy.uploadInvoices('invoices/upload-file', 'upload/invoices_invalid_template.csv').then((res) => {
      cy.convertArrayBinaryToString(res.body, 'latin1').then((resDecode) => {
        expect(resDecode.statusCode).to.be.eq(400);
        expect(resDecode.message).to.be.eq('O arquivo não corresponde ao template.');
      });
    });
  });
});
