Cypress.Commands.add('authSystem', function (userType: string) {
  const typesUsers = {
    supplier: Cypress.env('USERS').USER_BACK_SUPPLIER,
    manager: Cypress.env('USERS').USER_BACK_MANAGER,
    investor: Cypress.env('USERS').USER_BACK_INVESTOR,
  };
  const headers = {
    authority: 'cognito-idp.us-east-1.amazonaws.com',
    'content-type': 'application/x-amz-json-1.1',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth',
    'x-amz-user-agent': 'aws-amplify/5.0.4 js',
  };
  const body = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: 'o9od3jf3nqmfb0s8k8v3p1hcg',
    AuthParameters: { USERNAME: '', PASSWORD: Cypress.env('USERS').PASS_BACK },
    ClientMetadata: {},
  };

  for (const type in typesUsers) {
    if (userType === type) body.AuthParameters.USERNAME = typesUsers[type];
  }
  if (Cypress.env('REFRESH_TOKEN')) {
    const headerLogout = {
      authority: 'cognito-idp.us-east-1.amazonaws.com',
      'content-type': 'application/x-amz-json-1.1',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'x-amz-target': 'AWSCognitoIdentityProviderService.RevokeToken',
      'x-amz-user-agent': 'aws-amplify/5.0.4 js',
    };

    const bodyLogout = {
      Token: Cypress.env('REFRESH_TOKEN'),
      ClientId: body.ClientId,
    };
    let response = '';
    cy.requestCognito('POST', Cypress.env('cognito'), JSON.stringify(bodyLogout), headerLogout).then(function (res) {
      const respo = res;
      console.log(respo);
    });
    console.log(response);
  }
  // headers['x-amz-target'] = 'AWSCognitoIdentityProviderService.InitiateAuth';
  cy.requestCognito('POST', Cypress.env('cognito'), JSON.stringify(body), headers).then(function (token) {
    const tokenAcess = JSON.parse(token.body);
    Cypress.env('ID_TOKEN', tokenAcess.AuthenticationResult.IdToken);
    Cypress.env('COGNITO_TOKEN', tokenAcess.AuthenticationResult.AccessToken);
    Cypress.env('REFRESH_TOKEN', tokenAcess.AuthenticationResult.RefreshToken);
  });
});

Cypress.Commands.add('getEntityId', function () {
  cy.decodeJWT(Cypress.env('ID_TOKEN')).then((body) => body['custom:entityId']);
});
