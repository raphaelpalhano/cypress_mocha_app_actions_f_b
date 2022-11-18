import { faker } from '@faker-js/faker';
import * as FormData from 'form-data';
import { dateNow } from '../helpers/string.control';

Cypress.Commands.add('requestWithBody', (method: string, endpoint: string, body: object, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    body,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithBodyAndHeader', (method: string, endpoint: string, body: any, headers:
  any, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    headers,
    body,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithoutBody', (method: string, endpoint: string, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithoutBodyButParam',
  (method: string, endpoint: string, param: string, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
    cy.request({
      method,
      url: `${endpoint}/${param}`,
      failOnStatusCode,
      timeout,
    }),
);

Cypress.Commands.add(
  'requestWithBodyAndParamAndHeader',
  (method: string, endpoint: string, body: string, param: string, headers: object, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>

    cy.request({
      method,
      url: `${endpoint}/${param}`,
      headers,
      body,
      failOnStatusCode,
      timeout,
    }),

);

// Mudar a primeira coluna do upload de notas (REGEX tamanho do char)

Cypress.Commands.add(
  'requestFormData',
  (method: string, endpoint: string, filePath: string, typeFile: string, encondingType: string, formObject = {}, failOnStatusCode = false) => {
    cy.fixture(filePath, 'binary').then((txtEdit) => {
      const regex = /[0-9]{2}[-|\\/]{1}[0-12]{2}[-|\\/]{1}[0-9]{4}/;
      const invoiceEndRegex = /0{5}/;
      if (txtEdit.match(regex)) {
        return txtEdit.replace(regex, dateNow(10)).replace(invoiceEndRegex, faker.random.numeric(5));
      }
      return txtEdit;
    })
      .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin, encondingType))
      .then((blob) => {
        const formData = new FormData();
        if (formObject.key) {
          formData.append(formObject.key, formObject.value);
        }
        formData.append(typeFile, blob);

        cy.log('RequestFormData', {
          methodHttp: method,
          route: endpoint,
          paht: filePath,
          type: typeFile,
          enconding: encondingType,
          object: formObject,
        });

        cy.request({
          method,
          url: endpoint,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
          failOnStatusCode,
        });
      // formRequest(url, formData, function (response) {
      //   console.log(response);
      //   expect(response.status).to.eq(201);
      // });
      });
  });

// function formRequest(url, formData, done) {
//   const xhr = new XMLHttpRequest();

//   xhr.withCredentials = true;
//   if (typeof XMLHttpRequest !== 'undefined') {
//     xhr.open('POST', url);

//     xhr.setRequestHeader('Authorization', `Bearer ${Cypress.env('TOKEN_BAREAR')}`);
//     // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
//     // xhr.setRequestHeader('Content-Type', 'application/json');
//     console.log('XMLHttpRequest created.');
//   }

//   xhr.onload = function () {
//     done(xhr);
//   };
//   xhr.onerror = function () {
//     done(xhr);
//   };
//   xhr.send(formData);
// }
