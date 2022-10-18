const envControl = (server) => {
  const base = Cypress.env('BASESERVER').toString();
  return base.includes(server);
};

export const controlEnv = (appEnv: string) => {
  const env = String(Cypress.env('grepTags'));
  Cypress.env('ambiente', appEnv);

  if (env.includes('api')) {
    if (!envControl(env)) {
      const rebase = Cypress.env(appEnv);
      Cypress.config('baseUrl', rebase);
    }
  }
};

Cypress.Commands.add('changeBaseUrl', (server: string) => {
  Cypress.env('ambiente', server);
  if (!envControl(server)) {
    const rebase = Cypress.env(server);
    Cypress.config('baseUrl', rebase);
  }
});
