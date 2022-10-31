export const controlEnv = () => {
  const envValue = String(Cypress.env('grepTags'));
  const envValid = envValue.includes('@') ? envValue.replace('@', '') : envValue;

  if (envValid !== null && typeof envValid !== undefined && typeof envValid === 'string') {
    Cypress.env('ambiente', envValid);
    const rebase = Cypress.env(envValid);
    Cypress.config('baseUrl', rebase);
  }
};
