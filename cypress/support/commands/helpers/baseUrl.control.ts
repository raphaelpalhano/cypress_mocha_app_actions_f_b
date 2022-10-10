import stringControl from '../../utils/string.control';

Cypress.Commands.add('changeBaseUrl', (server: string) => {
  Cypress.env('ambiente', server);
  if (!stringControl.envControl(server)) {
    const rebase = Cypress.env(server);
    Cypress.config('baseUrl', rebase);
  }
});
