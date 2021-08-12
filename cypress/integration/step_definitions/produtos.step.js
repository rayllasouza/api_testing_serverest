/// <reference types="cypress" />
import {When, Then, Given} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'

Given(`that the user is of type admin and is authenticated`, () => {
    ServeRest.post_login('valid').then(res => {
        cy.wrap(res).as('Response');
    });
})

When(`create a valid product`, () => {
    cy.get('@Response').then(login_res => {
        let auth = login_res.body.authorization;
        
        ServeRest.post_produto(auth).then(product_res => {
            cy.wrap(product_res).as('Response')
        });
    })
})

When(`request all products`, () => {
	ServeRest.get_all_products().then( res => {
        cy.wrap(res).as('Response')
    })
});


When(`request all products by id {string}`, (id) => {
	ServeRest.get_product_by_id(id).then(res => {
        cy.wrap(res).as('Response')
    })
});






When(`put a product by id {string} and body {string}`, (id, body) => {
	cy.get('@Response').then( res => {
        ServeRest.put_product_by_id(id, body, res.body.authorization).then(res => {
            cy.wrap(res).as('Response')
            cy.log(res)
        })
    })
    
});




When(`already has a product created`, () => {
	cy.get('@Response').then(res => {
        ServeRest.post_produto(res.body.authorization)
    })
    
});



 















