import * as breakPoint from '../../../fixtures/static/breakPoint.json';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('openBrowser', () => {
  cy.visit(Cypress.env('frontend'));
  cy.get('div h2').should('have.text', breakPoint.welcomeMessage);
});

Cypress.Commands.add('login', (userType: 'supplier' | 'manager' | 'investor') => {
  const typesUsers = {
    supplier: {
      user: Cypress.env('USERS').USER_BACK_SUPPLIER,
      password: Cypress.env('USERS').PASS_BACK,
    },
    manager: {
      user: Cypress.env('USERS').USER_BACK_MANAGER,
      password: Cypress.env('USERS').PASS_BACK,
    },
    investor: {
      user: Cypress.env('USERS').USER_BACK_INVESTOR,
      password: Cypress.env('USERS').PASS_BACK,
    },
  };

  const typeuser = typesUsers[userType];
  if (Cypress.env('ENV') === 'prod') {
    switch (userType) {
      case 'supplier':
        typeuser.user = Cypress.env('USERS').USER_SUPPLIER_PROD;
        typeuser.password = Cypress.env('USERS').SUPPLIER_PROD_PASS;
        break;
      case 'manager':
        typeuser.user = Cypress.env('USERS').USER_MANAGER_PROD;
        typeuser.password = Cypress.env('USERS').MANAGER_PROD_PASS;
        break;
      case 'investor':
        typeuser.user = Cypress.env('USERS').USER_INVESTOR_PROD;
        typeuser.password = Cypress.env('USERS').INVESTOR_PROD_PASS;
        break;
      default:
        cy.log('Login error', {
          userType,
        });
    }
  }

  cy.input('username').type(typeuser.user);
  cy.input('password').type(typeuser.password);
  cy.button().click({ force: true });
});

Cypress.Commands.add('simpleLogin', (username, password) => {
  cy.input('username').type(username);
  cy.input('password').type(password);
  cy.button().click({ force: true });
});

Cypress.Commands.add('logout', () => {
  cy.dataId('logout-button').click({ force: true });
  cy.get('div h2').should('have.text', breakPoint.welcomeMessage);
});
