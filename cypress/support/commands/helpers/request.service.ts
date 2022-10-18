/**
 * @params
 * first - originalFunction: request original
 * second - options: object cy.request({}) checking if have used one object
 *
 * @conditionals
 * if object parameter equals one {}
 * if environment variable token exist
 *
 * @setToken
 * first object response:  options[0].headers
 *
 * @return
 * originalFunction with parameters: options
 *
 */

Cypress.Commands.overwrite('request', (originalFunction, ...options) => {
  Cypress.env('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIxMjMifQ.-7drgq5Jss_KB8BnsBapVig4L6s1ES0-y6z-dg1HOxw');
  if (options.length === 1) {
    if (Cypress.env('token')) {
      options[0].headers = {
        Authorization: `bearer ${Cypress.env('token')}`,
      };
    }
  }

  return originalFunction(...options);
});
