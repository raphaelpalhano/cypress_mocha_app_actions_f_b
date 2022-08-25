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
        'O campo deve ser um e-mail válido.Data da procuração vencida.',
        'A nova senha e a confirmação estão diferentes',
        'Letra maiúscula',
        'Letra minúscula',
        'Número',
        'Caractere especial',
        '8 caracteres',
        'O campo deve ser uma URL válida.',
        'Letra maiúsculaLetra minúsculaNúmeroCaractere especial8 caracteres',
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
      ]);
    });
});
