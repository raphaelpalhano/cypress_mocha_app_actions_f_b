# Estrutura do framework


## 1 Pageobject

### 1.1 Locators

* **componentes**:
    - todos os seletores por meio de classes
    - Cada classe representa a relação de elementos de uma página

  **generalLocators**
~~~javascript
 export default {
  WELCOME: () => cy.get('div h2'),

  INPUT: (value) => cy.get(`input[name="${value}"]`),

  BUTTON: () => cy.get('[type="submit"]'),
 }
~~~

**Locators que podem ser usados em todas telas**


## pages

* **pages**:
  - representa o comportamento de cada página
  - cada arquivo representa uma classe da página

**LoginPage.js**
~~~javascript
import BasePage from './BasePage'
import {LoginElement} from '../components/LoginElement'

export class LoginPage {
  static goToLogin() {
    cy.visit('/');
  }
}
~~~


## 4. commands

**São comandos internos do cypress criados para fazer auxiliar nos comportamentos que já existem**


## 5. utils
  * **utils são utilizados para auxiliar functions genericas**
    



# Configuração inicial

## 1. VSC
  **Plugins**
  * EditorConfig for VS Code
  * ESLint
  * Draw.io Integration
  

## 2. instalações
 * npm i 
 * npm i --production

## 3. Verificação do ambiente
  * Criar um arquivo ou mudar a url do cypress.config.js

**Configurando multiplos ambientes:**

1. Vá até o arquivo cypress.config.js

2. Modifique o valor abaixo: 
~~~javascript
env: {
    BASESERVER: 'UI-MS8', // esse valor representa o servidor base que vai executar
~~~

3. Criei as url que representam os serviços em cypress.config.js

~~~javascript

 env: {
   
    serverRest: 'https://serverest.dev',
    test: 'http://localhost:988',
  },

~~~

4. Criei um hook com before para chamar a function `cy.changeBaseUrl('UI-MS8');`

OBS: caso você queria modificar a baseUrl, você precisa passar outro valor diferente do `BASESERVER`. Passe o valor que está em env. `cy.changeBaseUrl('serverRest');`





# Execução

  * Instalar: `npm i {package_name} -D`.
  * Rodar em modo headless: `npm run cy:run`
  * Rodar em tela gráfica: `npm run cy:open`
  * Rodar apenas testes com tag developd `npm run cy:open:developed`
  * Rodar apenas testes com tag developd em headlesss `npm run cy:run:developed`
  * Limpar os reports: `npm run cy:clean`

# Dependências:

  * [**Cypress**](https://www.cypress.io/)
  * [**Cypress-cucumber-preprocessor**](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
  * [**Fs-extra**](https://www.npmjs.com/package/fs-extra)
  * [**Rimraf**](https://www.npmjs.com/package/rimraf)
  * [**Multiple-cucumber-html-reporter**](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
  * [**Faker-br**](https://www.npmjs.com/package/faker-br)

  * [**Command**]: **npm i --save-dev {package}**



# Como rodar o projeto pelo docker:


# Eslint Cypress


### Aplicando boas práticas com o eslint

**Fonte**:[eslint-plugin](https://github.com/cypress-io/eslint-plugin-cypress)

**Run** `npm run lint`
