Cypress.Commands.add('requestWithBody', (method: string, endpoint: string, body: object, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    body,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithBodyAndHeader', (method: string, endpoint: string, body: object, headers: any, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
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

Cypress.Commands.add('requestWithoutBodyButParam', (method: string, endpoint: string, param: string, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: `${endpoint}/${param}`,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add(
  'requestWithBodyAndParamAndHeader',
  (method: string, endpoint: string, body: string, param: string, headers: any, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
    cy.request({
      method,
      url: `${endpoint}/${param}`,
      headers,
      body,
      failOnStatusCode,
      timeout,
    }),
);
