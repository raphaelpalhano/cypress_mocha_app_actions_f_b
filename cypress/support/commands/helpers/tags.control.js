Cypress.Commands.add('selectTag', (text, tagName) => {
  Cypress.grep(text, tagName);
});
