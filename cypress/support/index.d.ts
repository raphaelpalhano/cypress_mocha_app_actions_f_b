declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * @Description coloque o nome da tag que representa o ambiente que você estiver trabalhando
     * @param: (TagName)
     * @example: cy.changeBaseUrlIfNotEq('ServRest')
     * @Effect vai mudar a baseUrl para o outro ambiente conforme o que estiver no env do arquivo cypress.config.js
     */
    changeBaseUrl(envName: string): Chainable<any>;

    convertArrayBinaryToString(bodyBinary: any, mimeType: any): Chainable<any>;

    decodeJWT(encoded: string): Chainable<any>;

    getEntityId(): Chainable<any>;

    converterToJson(file: string): Chainable<any>;

    /* -------------------------------------------------------BACK-END --------------------------------------------------------------------*/

    /**
     * @CommandGeneric
     * @requestWithoutBody
     * @method: get,delete,update
     * @param: (method,url)
     */
    requestWithoutBody(method: string, url: string): Chainable<any>;

    /**
     * @CommandGeneric
     * @requestWithBody
     * @method: post,delete,patch,update
     * @param: (method,url,body)
     * @example: cy.requestWithBody('POST', 'admin/user', body.json)
     */
    requestWithBody(method: string, url: string, body: object): Chainable<any>;

    /**
     * @CommandGeneric
     * @requestWithBody
     * @method: post,delete,patch,update
     * @param: (method,url,body,header)
     * @example: cy.requestWithBody('POST', 'admin/user', body.json, 'application/json')
     */
    requestWithBodyAndHeader(method: string, url: string, body: any, header: any): Chainable<any>;

    requestCognito(method: string, url: string, body: any, header: any): Chainable<any>;

    requestWithoutBodyButParam(method: string, endpoint: string, param: string): Chainable<any>;

    requestWithBodyAndParamAndHeader(method: string, endpoint: string, body: string, param: string, headers: any): Chainable<any>;

    authSystem(userType: string): Chainable<any>;

    /**
     *
     * @param method
     * @param endpoint
     * @param filePath
     * @param typeFile
     * @param mimeType
     * @param formObject \{key: enterprise, value: 21312}
     *
     * @example cy.requestFormData('POST', `operations/api/v1/${endpoint}`, filePath, 'file', 'text/csv', formObject);`
     */
    requestFormData(method: string, endpoint: string, filePath: string, typeFile: string, mimeType: string, formObject: any): Chainable<any>;

    requestFormDataWithParam(method: string, endpoint: string, filePath: string, typeFile: string, mimeType: string, formObject: any): Chainable<any>;

    /**
     * @Description Gera as rotas utilizadas na automação
     */
    routerGenerator(): Chainable<any>;

    /**
     * @Description O comando cy.contractValidation() deve ser utilizado para validações de schemas.
     */
    schemaValidation(filePath, res: any): Chainable<any>;

    /* -----------------------------------------------------------------MICROSSERVICE -----------------------------------------------------*/

    getOperations(endpoint: string): Chainable<any>;

    getOneOperations(endpoint: string, id: number): Chainable<any>;

    postOperations(endpoint: string, body: object): Chainable<any>;

    deleteOperations(endpoint: string, id: string): Chainable<any>;

    patchOperations(endpoint: string, id: string, body: object): Chainable<any>;

    updateOperations(endpoint: string, id: string, body: object): Chainable<any>;

    uploadInvoices(endpoint: string, filePath: string, formObject: object): Chainable<any>;

    getSupplierInfo(endpoint: string, id: string): Chainable<any>;

    getListOfEnterprises(endpoint: string): Chainable<any>;

    postRetreveIdEnterprise(endpoint: string, body: Array<string>): Chainable<any>;

    getBffSpecific(endpoint: string, param: string): Chainable<any>;

    getBffgeneral(endpoint: string): Chainable<any>;

    getIntegrations(endpoint: string): Chainable<any>;

    getSpecificIntegration(endpoint: string, id: string): Chainable<any>;

    updateSpecificIntegration(endpoint: string, id: string, body: object): Chainable<any>;

    postIntegration(endpoint: string, body: object): Chainable<any>;

    deleteIntegration(endpoint: string, id: string): Chainable<any>;

    submitOrder(endpoint: string, orderId: string, body: object): Chainable<any>;

    uploadFees(endpoint: string, filePath: string): Chainable<any>;

    getInvestors(endpoint: string): Chainable<any>;

    patchInvestors(endpoint: string, body: object): Chainable<any>;

    /* -----------------------------------------------------------------FRONT-END -----------------------------------------------------*/

    /**
     * @Description Nome do arquivo e path onde está o arquivo
     * @param: ('Contrato Social*', 'upload/PDF_TEST.pdf');
     * @example: cy.fileUpload('Contrato Social*', 'upload/PDF_TEST.pdf');
     */
    fileUpload(typeFile: string, pathFile: string): Chainable<any>;

    modal(message: string): Chainable<any>;
    welcome(): Chainable<any>;
    menuItem(value: string): Chainable<any>;
    subitem(value: string): Chainable<any>;
    dataId(value: string): Chainable<any>;
    input(value: string): Chainable<any>;
    elementType(value: string): Chainable<any>;
    href(value: string): Chainable<any>;
    role(value: string): Chainable<any>;
    login(username: string, password: string): Chainable<any>;
    logout(): Chainable<any>;
    openBrowser(): Chainable<any>;
    validRoute(value: string): Chainable<any>;
    clickOutside(): Chainable<any>;
    table(value: string): Chainable<any>;
    validTime(): Chainable<any>;
    validDate(): Chainable<any>;
    alertMessage(): Chainable<any>;
    button(): Chainable<any>;
    inputEnterpriseData(type: string): void;
    uploadEnterpriseFiles(): Chainable<any>;
    companyAdress(type: string): void;
    legalResponsible(type: string): void;
    uploadLegalResponsiblesFiles(): Chainable<any>;
    successMessage(): Chainable<any>;
    submitForm(): Chainable<any>;
    errorMessage(): Chainable<any>;
    validFormIntegration(): Chainable<any>;
    cancelModal(): Chainable<any>;
    removeAllIntegration(): Chainable<any>;
    pageFeesLimits(): Chainable<any>;
    pageIntegrations(): Chainable<any>;
    pageInvoiceIntermetation(): Chainable<any>;
    pageRegisterEnterprise(): Chainable<any>;
    pageUploadInvoices(enterprise: string, path: string): Chainable<any>;
    pageOrderApproved(): Chainable<any>;
    pageOrderPaid(): Chainable<any>;
  }
}
