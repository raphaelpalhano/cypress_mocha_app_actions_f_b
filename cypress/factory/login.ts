import { faker } from '@faker-js/faker';

export default {
  getUserToLogin(loginType: string) {
    switch (loginType) {
      case 'gestor':
        return {
          user: 'gestor',
          password: Cypress.env('USERS').PASSWORD_SIGNIN,
        };
      case 'investidor':
        return {
          user: 'investidor',
          password: Cypress.env('USERS').PASSWORD_SIGNIN,
        };
      case 'fornecedor':
        return {
          user: 'fornecedor',
          password: Cypress.env('USERS').PASSWORD_SIGNIN,
        };
      case 'empresa':
        return {
          user: 'empresa',
          password: Cypress.env('USERS').PASSWORD_SIGNIN,
        };
      case 'sem_credencial':
        return {
          user: ' ',
          password: ' ',
        };
      case 'invalid':
        return {
          user: 'gestor',
          password: faker.internet.password(),
        };

      default:
        return { notfound: 'O login não foi encontrado!' };
    }
  },
};
