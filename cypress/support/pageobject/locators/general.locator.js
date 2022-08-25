export default {
  WELCOME: () => cy.get('div h2'),

  INPUT: (value) => cy.get(`input[name="${value}"]`),

  BUTTON: () => cy.get('[type="submit"]'),

  ERRORMESSAGE: () => cy.get('[role="alert"]'),

  DATATEST: (id) => cy.get(`[data-testid="${id}"]`),

  HREF: (route) => cy.get(`a[href="/${route}"]`),

  NAV: () => cy.get('nav ul li a[href="/"] span'),

  DIALOG: () => cy.get('[role="dialog"] div h2'),

  ROOT: () => cy.get('div[id="root"]'),
};
