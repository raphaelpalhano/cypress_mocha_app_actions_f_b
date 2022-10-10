declare namespace Cypress {
    interface Chainable<Subject> {

       /**
       * @Description coloque o nome da tag que representa o ambiente que você estiver trabalhando
       * @param: (TagName)
       * @example: cy.changeBaseUrlIfNotEq('ServRest')
       * @Effect vai mudar a baseUrl para o outro ambiente conforme o que estiver no env do arquivo cypress.config.js 
       */
        changeBaseUrl(envName: string): Chainable<any>


        /* -------------------------------------------------------BACK-END --------------------------------------------------------------------*/

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
       * @Description Gera as rotas utilizadas na automação
       */
        routerGenerator(): Chainable<any>


         /**
       * @Description O comando cy.contractValidation() deve ser utilizado para validações de contrato.
       */  
      contractValidation(res:string, service: string, request: string): Chainable<any>
      

      requestWithoutBodyButParam(method: string, endpoint: string, param: string, failOnStatusCode: boolean, timeout: number): Chainable<any>


      requestWithBodyAndParamAndHeader(method: string, endpoint: string, body: string, param: string, headers: any, failOnStatusCode: boolean, timeout: number): Chainable<any>

      getAllUsers(): Chainable<any>

      getUserId(id: number): Chainable<any>



       /*-----------------------------------------------------------------FRONT-END -----------------------------------------------------*/      

         /**
       * @Description Nome do arquivo e path onde está o arquivo
       * @param: ('Contrato Social*', 'upload/PDF_TEST.pdf');
       * @example: cy.fileUpload('Contrato Social*', 'upload/PDF_TEST.pdf');
       */
      fileUpload(typeFile: string, pathFile: string): Chainable<any>

      modal(message: string): Chainable<any>
      welcome(): Chainable<any>
      menuItem(value: string): Chainable<any>
      subitem(value: string): Chainable<any>
      dataId(value: string): Chainable<any>
      input(value: string): Chainable<any>
      elementType(value: string): Chainable<any>
      href(value: string): Chainable<any>
      role(value: string): Chainable<any>
      login(username: string) : Chainable<any>
      openBrowser() : Chainable<any>
      validRoute(value: string): Chainable<any>
      clickOutside() : Chainable<any>
      table(value: string) : Chainable<any>
      validTime() : Chainable<any>
      validDate() : Chainable<any>
      alertMessage() : Chainable<any>
      button(): Chainable<any>  
      inputEnterpriseData(type: string): void 
      uploadEnterpriseFiles(): Chainable<any> 
      companyAdress(type: string): void 
      legalResponsible(type: string): void 
      uploadLegalResponsiblesFiles(): Chainable<any> 
      successMessage(): Chainable<any> 
      submitForm(): Chainable<any> 
      errorMessage(): Chainable<any> 
      validFormIntegration(): Chainable<any>
      cancelModal(): Chainable<any>
      removeAllIntegration(): Chainable<any>

    }

}