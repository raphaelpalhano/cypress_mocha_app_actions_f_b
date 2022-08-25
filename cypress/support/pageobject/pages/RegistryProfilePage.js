import generalLocator from '../locators/general.locator';

export class RegistryProfilePage {
  static acessEnterprise() {
    generalLocator.HREF(Cypress.env('enterprise_create')).click();
  }

  static acessProvider() {
    generalLocator.HREF(Cypress.env('provider')).click();
  }
}
