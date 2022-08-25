import enterpise from '../../../factory/enterpise';
import enterpriseLocator from '../locators/enterprise.locator';
import generalLocator from '../locators/general.locator';
import message from '../../../fixtures/static/successMessage.json';

export class EnterpriseRegistryPage {
  static validEnterprise() {
    cy.contains('Dados da Empresa');
  }

  static inputEnterpriseData(type) {
    const data = enterpise.getEnterprise(type);
    generalLocator.INPUT('person.document').type(data.dataCompany.cnpj);
    generalLocator.INPUT('person.corporateName').type(data.dataCompany.companyName);
    generalLocator.INPUT('person.tradingName').type(data.dataCompany.fantasyName);
    generalLocator.INPUT('person.establishment').type(data.dataCompany.fundationData);
    generalLocator.INPUT('person.cnae').type(data.dataCompany.cnae);
    generalLocator.INPUT('person.electionDate').type(data.dataAta);
  }

  static uploadEnterpriseFiles() {
    cy.fileUpload('Contrato Social*', 'upload/PDF_TEST.pdf');
    cy.fileUpload('Imagem da Marca*', 'upload/teste_image.png');
    cy.fileUpload('Ata de Eleição*', 'upload/PDF_TEST.pdf');
  }

  static companyAdress(type) {
    const data = enterpise.getEnterprise(type);
    generalLocator.INPUT('address.zipCode').type(data.address.zipCode);
    generalLocator.INPUT('address.number').type(data.address.number);
    generalLocator.INPUT('address.complement').type(data.address.complement);
  }

  static legalResponsible(type) {
    const data = enterpise.getEnterprise(type);
    generalLocator.INPUT('legalEntities.0.name').type(data.responsible.fullName);
    generalLocator.INPUT('legalEntities.0.document').type(data.responsible.cpf);
    generalLocator.INPUT('legalEntities.0.birthDate').type(data.responsible.birthData);
    generalLocator.INPUT('legalEntities.0.phone').type(data.responsible.cell);
    generalLocator.INPUT('legalEntities.0.email').type(data.responsible.email);
    enterpriseLocator.QUALIFICATION().click();
    enterpriseLocator.ROLEQUALIFICATION(data.responsible.qualification).click();
    generalLocator.INPUT('legalEntities.0.powerOfAttorneyExpirationDate').type(data.attorneyValidity);
  }

  static uploadLegalResponsiblesFiles() {
    cy.fileUpload('RG/CNH/Certidão*', 'upload/PDF_TEST.pdf');
    cy.fileUpload('Procuração*', 'upload/PDF_TEST.pdf');
  }

  static successMessage() {
    generalLocator.DIALOG().should('have.text', message.companyRegistred).as('dialog');
    cy.get('@dialog').screenshot();
  }

  static submitForm() {
    generalLocator.BUTTON().click();
  }
}
