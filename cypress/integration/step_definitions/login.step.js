/// <reference types="cypress" />
import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'


When(`make a post of type {string} from /login`, (tipo_usuario) => {
	ServeRest.post_login(tipo_usuario).then( res => {
        cy.wrap(res).as('Response')
    })
	
});

Then(`must be responsed the schema {string} with status {int}`, (schema, status) => {
	cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(result => {
            expect(result).to.be.true
            expect(res.status).to.equal(status)
        })        
    })
    
    
	
});

 Then(`must have property {string} with value {string}`, (property, message) => {
     cy.get('@Response').then(res => {
             expect(res.body[property]).to.equal(message)       
     })
 })
