describe('User operation the intermediation fees', { tags: '@api' }, function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('manager');
  });

  it('I want upload invoices in operations service', function () {
    cy.uploadInvoices('invoices/upload-file', 'upload/invoices.csv').then((res) => {
      expect(res.status).to.be.eq(201);
      cy.schemaValidation('operations/uploadValidInvoices.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });

  it('Given that the manager uploaded invoices have invalid date', function () {
    cy.uploadInvoices('invoices/upload-file', 'upload/invoices_invalid_date.csv').then((res) => {
      cy.convertArrayBinaryToString(res.body, 'latin1').then((resDecode) => {
        expect(resDecode.statusCode).to.be.eq(400);
        expect(resDecode.message).to.be.eq('Data de vencimento inválida.');
        cy.schemaValidation('operations/uploadinvalidInvoices.json', resDecode).then((validation) => {
          expect(validation).to.be.eq('Schema validated successfully!');
        });
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

  it('Given that the manager uploaded invoices have invalid template', function () {
    cy.getOperations('invoices').then((res) => {
      expect(res.statusCode).to.be.eq(200);
      expect(res.body.data).length.above(1);
      cy.schemaValidation('operations/getInvoices.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });
});
