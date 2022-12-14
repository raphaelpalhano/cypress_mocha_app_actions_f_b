export const controlEnv = () => {
  const envValue = String(Cypress.env('ENV'));

  if (envValue !== null && typeof envValue !== undefined && typeof envValue === 'string' && envValue === 'prod') {
    Cypress.env('api', '..');
    Cypress.env('frontend', '..');
  }
};
