import '@testing-library/cypress/add-commands'
import enterpise from '../../../factory/enterpise';
import * as message from '../../../fixtures/static/modalMessage.json';


const enterpriseLocator  = {
  TYPEKEY: (typeFile: string) => cy.xpath(`//div[contains(text(), "${typeFile}")]/descendant::input[@type="file"]`),
  QUALIFICATION: () => cy.get('button[data-testid="select-legal-entity-role"]'),
  ROLEQUALIFICATION: (role) => cy.xpath(`//div//ul[@role="listbox"]/descendant::li[contains(text(), "${role}")]`),
  TYPEFILE: (name: string) => cy.get(`label[data-testid="upload-button"] input[name="${name}"]`)
};

Cypress.Commands.add('fileUpload', (typeFile: string, pathFile: string) => {
  enterpriseLocator.TYPEFILE(typeFile).selectFile(pathFile, {force: true});
});


Cypress.Commands.add('inputEnterpriseData', (type: string) => {
  const data = enterpise.getEnterprise(type);
  cy.input('person.document').type(data.dataCompany.cnpj);
  cy.input('person.corporateName').type(data.dataCompany.companyName);
  cy.input('person.tradingName').type(data.dataCompany.fantasyName);
  cy.input('person.establishment').type(data.dataCompany.fundationData);
  cy.input('person.cnae').type(data.dataCompany.cnae);
});

Cypress.Commands.add('uploadEnterpriseFiles', () => {
  cy.fileUpload('person.socialContract', 'cypress/fixtures/upload/PDF_TEST.pdf');
  cy.fileUpload('person.tradeMark', 'cypress/fixtures/upload/teste_image.png');
});

Cypress.Commands.add('companyAdress', (type: string)  => {
  const data = enterpise.getEnterprise(type);
  cy.input('address.zipCode').type(data.address.zipCode);
  cy.input('address.number').type(data.address.number);
  cy.input('address.complement').type(data.address.complement);
});

Cypress.Commands.add('legalResponsible', (type: string) =>  {
  const data = enterpise.getEnterprise(type);
  cy.input('legalEntities.0.name').type(data.responsible.fullName);
  cy.input('legalEntities.0.document').type(data.responsible.cpf);
  cy.input('legalEntities.0.birthDate').type(data.responsible.birthData);
  cy.input('legalEntities.0.phone').type(data.responsible.cell);
  cy.input('legalEntities.0.email').type(data.responsible.email);
  enterpriseLocator.QUALIFICATION().click();
  enterpriseLocator.ROLEQUALIFICATION(data.responsible.qualification).click();
  cy.input('legalEntities.0.legalEntityComprobationDate').type(data.attorneyValidity);
});

Cypress.Commands.add('uploadLegalResponsiblesFiles', () => {
  cy.fileUpload('legalEntities.0.identityDocument', 'cypress/fixtures/upload/PDF_TEST.pdf');
  cy.fileUpload('legalEntities.0.legalEntityComprobation', 'cypress/fixtures/upload/PDF_TEST.pdf');
})

Cypress.Commands.add('successMessage', ()  => {
  cy.modal(message.companyRegistred).as('dialog');
  cy.get('@dialog').screenshot();
})

Cypress.Commands.add('errorMessage', () => {
  cy.alertMessage();

})

Cypress.Commands.add('submitForm', () => {
  cy.button().click();
})

