declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * @CommandGeneric
       * @requestWithoutBody
       * @method: get,delete,update
       * @param: (method,url)
       */
       requestWithoutBody(method: string, url: string): Chainable<any>
  
       /**
       * @CommandGeneric
       * @requestWithBody
       * @method: post,delete,patch,update
       * @param: (method,url,body)
       * @example: cy.requestWithBody('POST', 'admin/user', body.json)
       */
       requestWithBody(method: string, url: string, body: object): Chainable<any>


       /**
       * @CommandGeneric
       * @requestWithBody
       * @method: post,delete,patch,update
       * @param: (method,url,body,header)
       * @example: cy.requestWithBody('POST', 'admin/user', body.json, 'application/json')
       */
       requestWithBodyAndHeader(method: string, url: string, body: object, header: string): Chainable<any>


        /**
       * @Description coloque o nome da tag que representa o ambiente que você estiver trabalhando
       * @param: (TagName)
       * @example: cy.changeBaseUrlIfNotEq('ServRest')
       * @Effect vai mudar a baseUrl para o outro ambiente conforme o que estiver no env do arquivo cypress.config.js 
       */
         changeBaseUrl(envName: string): Chainable<any>


      
    }
}