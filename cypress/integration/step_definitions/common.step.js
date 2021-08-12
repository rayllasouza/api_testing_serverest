///<reference types="cypress" />
import {When, Then, Given} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'

Then(`must be responsed a schema {string} with status {int}`, (schema, status) => {
	cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(result => {
            expect(result).to.be.true
            expect(res.status).to.eq(status)
        })
        
    })
	
});


 Then(`must return a property {string} with a message {string}`, (property,message) => {
 	cy.get('@Response').then(res => {
 		expect(res.body[property]).to.equal(message)       
 	})
 
 });







