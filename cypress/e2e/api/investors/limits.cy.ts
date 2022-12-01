describe('User operation the intermediation fees', function () {
  before('Given my authentication with manager', () => {
    cy.authSystem('investor');
    cy.getListOfEnterprises('enterprises').then((res) => {
      cy.wrap(res.body.data[0].document).as('enterpriseDocument');
      cy.wrap(res.body.data[0].id).as('enterpriseID');
    });
  });

  it('How investor I want to se lists investors', function () {
    cy.getInvestors(`order?enterpriseId=${this.enterpriseID}&document=${this.enterpriseDocument}`).then((res) => {
      console.log(res);
      expect(res.status).to.be.eq(200);
      expect(res.body.data[0]).have.property('id');
      expect(res.body.data[0]).have.property('corporateName');
      expect(res.body.data[0]).have.property('document');
      expect(res.body.data[0]).have.property('tradingName');

      cy.schemaValidation('investors/getInvestors.json', res.body).then((validation) => {
        expect(validation).to.be.eq('Schema validated successfully!');
      });
    });
  });

  it('How investor I want to updated my limit', function () {
    const body = {
      enterpriseId: this.enterpriseID,
      limit: 10000000,
    };
    cy.getInvestors(`order?enterpriseId=${this.enterpriseID}&document=${this.enterpriseDocument}`).then((res) => {
      expect(res.status).to.be.eq(200);
      cy.patchInvestors(`${res.body.limits[0].investorId}/limits/${res.body.limits[0].id}`, body).then((response) => {
        expect(response.status).to.be.eq(200);
        expect(res.body).have.property('id');
        expect(res.body).have.property('investorId');
        expect(res.body).have.property('enterpriseId');
        expect(res.body).have.property('limit');

        cy.schemaValidation('investors/patchInvestors.json', response.body).then((validation) => {
          expect(validation).to.be.eq('Schema validated successfully!');
        });
      });
    });
  });
});
