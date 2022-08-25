Cypress.Commands.add('requestWithBody', (method, endpoint, body, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    body,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithBodyAndHeader', (method, endpoint, body, header, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    header,
    body,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithoutBody', (method, endpoint, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: endpoint,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add('requestWithoutBodyButParam', (method, endpoint, param, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
  cy.request({
    method,
    url: `${endpoint}/${param}`,
    failOnStatusCode,
    timeout,
  }),
);

Cypress.Commands.add(
  'requestWithBodyAndParamAndHeader',
  (method, endpoint, body, param, header, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) =>
    cy.request({
      method,
      url: `${endpoint}/${param}`,
      header,
      body,
      failOnStatusCode,
      timeout,
    }),
);
