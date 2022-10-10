import { faker } from '@faker-js/faker';

export default {
  typesIntegrations(loginType: string) {
    switch (loginType) {
      case 'url_valido':
        return {
          name: faker.internet.domainName(),
          credential: 'URL',
          type: 'URL',
          key: 'https://docsign.com',
        };
      case 'url_invalido':
        return {
          name: faker.internet.domainName(),
          credential: 'URL',
          type: 'URL',
          key: 'https://docsign',
        };
      case 'texto_valido':
        return {
          name: faker.internet.domainName(),
          credential: 'Texto',
          type: 'Texto',
          key: 'Registro de documentos',
        };
      case 'texto_invalido':
        return {
          name: faker.internet.domainName(),
          credential: 'Texto',
          type: 'Texto',
          key: ' ',
        };

      default:
        return { notfound: 'O login não foi encontrado!' };
    }
  },
};
