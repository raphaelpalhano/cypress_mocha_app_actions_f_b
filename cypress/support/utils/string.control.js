export default {
  envControl: (server) => {
    const base = Cypress.env('BASESERVER').toString();
    return base.includes(server);
  },
};
