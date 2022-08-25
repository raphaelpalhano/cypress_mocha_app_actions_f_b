import faker from 'faker-br';

export default {
  getUserToLogin(loginType) {
    switch (loginType) {
      case 'valido':
        return {
          user: Cypress.env('USERS').USER,
          password: Cypress.env('USERS').PASSWORD_SIGNIN,
        };
      case 'sem_credencial':
        return {
          user: ' ',
          password: ' ',
        };
      case 'invalid':
        return {
          user: faker.br.cpf(),
          password: faker.internet.password(),
        };

      default:
        return { notfound: 'O login não foi encontrado!' };
    }
  },

  getUser(type) {
    switch (type) {
      case 'admin':
        return {
          nome: 'Fulano',
          email: Cypress.env('EMAIL'),
          password: Cypress.env('PASSWORD'),
          administrador: 'true',
        };
      case 'valid':
        return {
          nome: faker.name.findName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          administrador: admin.toString(),
        };
      case 'invalid':
        return {
          nome: 'Fulano da Silva',
          email: 'beltrano@qa.com.br',
          password: 'teste',
          administrador: 'true',
        };

      default:
        return { notfound: 'O usuário não foi encontrado, verifique o tipo passado!' };
    }
  },
};
