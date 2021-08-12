/// <reference types="cypress" />
import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'



When(`request all the users`, () => {
	ServeRest.get_all_users().then(getUser_res => {
		cy.wrap(getUser_res).as('Response')
	})
});


When(`post the user of type {string}`, (user_type) => {
	ServeRest.post_user_by_type(user_type).then(post_res => {
		cy.wrap(post_res).as('Response')
	})
});



When(`request a user by id {string}`, (id) => {
	ServeRest.get_user_id(id).then( res => {
		cy.wrap(res).as('Response')
	})
});


When(`put a user by id {string} and body {string}`, (id, body) => {
	//preciso de um id de tal tipo

	//preciso de um body de tal tipo
	ServeRest.put_user_by_id(id, body).then( res => {
		cy.wrap(res).as('Response')
	});
})





When(`delete a user by id {string}`, (id) => {
	ServeRest.delete_user(id).then( res => {
		cy.wrap(res).as('Response')
	})
});





