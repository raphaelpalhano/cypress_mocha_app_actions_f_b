import * as FormData from 'form-data';

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

Cypress.Commands.add(
  'requestWithFormData',
  (method: string, endpoint: string, filePath: string, failOnStatusCode = false) =>

    cy.fixture(filePath, 'binary')
      .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin, 'text/csv'))
      .then((blob) => {
        const url = `https://8xbha0ib2d.execute-api.us-east-1.amazonaws.com/proxy/${endpoint}`;
        const formData = new FormData();
        formData.append('enterpriseId', '53444e18-97e9-4099-a0f8-49c62153d8c6');
        formData.append('file', blob);

        cy.request({
          method,
          url,
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
      }),

);

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
