import generalLocator from '../locators/general.locator';

export class LateralMenu {
  static validNav() {
    generalLocator.NAV().should('have.text', breakPoint.navPrincipal);
  }

  static newProfile() {
    cy.contains('Cadastros e acessos').click();
    cy.contains('Cadastrar novo Perfil').click();
  }

  static navIntegration() {
    cy.contains('Configurações').click();
    cy.contains('Integrações').click();
  }
}
