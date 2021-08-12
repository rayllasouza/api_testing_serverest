
export default class Rest {
    static httpRequestWithBody(method, endpoint, body, headers = null, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: method,
            url: endpoint,
            body: body,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout,
            headers: headers
        })
    }

    static httpRequestWithoutBody(method, endpoint, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: method,
            url: endpoint,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })
    }

    static get(url){
        return cy.request({
            method: 'GET',
            url: url
        })
    }

    
}