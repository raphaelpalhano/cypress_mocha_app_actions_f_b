describe('Given the operator want see market status', { tags: '@api' }, function () {
  beforeEach('Given my authentication with manager', () => {
    cy.authSystem('manager');
  });

  it('When market is open', function () {
    cy.getOperations('market-status').then((res) => {
      expect(res.status).to.be.eq(200);
    });
  });
});
