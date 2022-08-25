import enterpriseLocator from '../../pageobject/locators/enterprise.locator';

Cypress.Commands.add('fileUpload', (typeFile, pathFile) => {
  enterpriseLocator.TYPEKEY(typeFile).attachFile({ filePath: pathFile, encoding: 'utf-8' });
});
