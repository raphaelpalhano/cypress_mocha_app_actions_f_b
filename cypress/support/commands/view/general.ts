import '@testing-library/cypress/add-commands';

Cypress.Commands.add('modal', (message) => cy.get('[role="dialog"] div h2').should('have.text', message));

Cypress.Commands.add('welcome', () => cy.get('div h2'));

Cypress.Commands.add('dataId', (value) => cy.get(`[data-testid=${value}]`));

Cypress.Commands.add('menuItem', (menu: string) => {
  cy.xpath(`//li//span[contains(text(), "${menu}")]`);
});

Cypress.Commands.add('subitem', (submenu: string) => cy.xpath(`//li//button[contains(text(), "${submenu}")]`));

Cypress.Commands.add('input', (value) => cy.get(`input[name*="${value}"]`));

Cypress.Commands.add('elementType', (value) => cy.get(`[type=${value}]`));

Cypress.Commands.add('validRoute', (route) => {
  const baseUrl = Cypress.config('baseUrl');
  cy.url().should('be.equal', `${baseUrl}/${route}`);
});

Cypress.Commands.add('alertMessage', () => {
  cy.get('[role="alert"]')
    .should('be.visible')
    .invoke('text')
    .then((errText) => {
      expect(errText).to.be.oneOf([
        'Usuário ou senha inválidos',
        'O campo é obrigatório.O campo é obrigatório.',
        'O campo é obrigatório.',
        'O campo deve ser um e-mail válido.',
        'A nova senha e a confirmação estão diferentes',
        'Letra maiúscula',
        'Letra minúscula',
        'Número',
        'O campo deve ser uma URL válida.',
        'Caractere especial',
        '8 caracteres',
        'Letra maiúsculaLetra minúsculaNúmeroCaractere especial8 caracteres',
        'O campo deve ser um número positivo.',
        'O campo precisa ser um número.',
        'O campo deve ser um e-mail válido.Data da procuração vencida.',
        'A nova senha e a confirmação estão diferentes',
        'Letra maiúsculaLetra minúsculaNúmeroCaractere especial8 caracteresA nova senha e a confirmação estão diferentes',
        'O campo deve ter pelo menos 8 caracteres.',
        'O campo precisa ser um CNPJ válido.',
        'O campo precisar ser uma data.',
        'O campo deve ter pelo menos 7 caracteres.',
        'O campo deve ser um CPF válido.',
        'O campo deve ser um telefone válido',
        'Data da procuração vencida.',
        'O responsável precisa ser maior de 18 anos.',
        'A data de fundação não pode ser maior que hoje.',
        'O campo deve ser um e-mail válido.Data da procuração/ata vencida.',
        'Erro ao cadastrar, por favor tente novamente.',
      ]);
    });
});

Cypress.Commands.add('href', (value) => cy.get(`a[href="/${value}"]`));

Cypress.Commands.add('role', (value) => cy.get(`[role=${value}]`));

Cypress.Commands.add('clickOutside', () => cy.get('body').click(0, 0));

Cypress.Commands.add('button', () => cy.get('[type="submit"]'));

Cypress.Commands.add('fileUpload', (name: string, pathFile: string) => {
  cy.get(`label[data-testid="upload-button"] input[name="${name}"]`).selectFile(pathFile, { force: true });
});
