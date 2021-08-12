import Rest from "./common/_rest.service";
import { Factory } from "../fixtures/factory";
import faker from 'faker'


const URL_USERS = '/usuarios'
const URL_LOGIN = '/login'
//const URL_USER_ID = '/usuarios/id'
const URL_PRODUCT = '/produtos'

export class ServeRest extends Rest {

    static get_all_users(){
        return super.httpRequestWithoutBody('GET', URL_USERS)
    }

    static post_user_by_type(type){
        let body = Factory.createUserBody(type)
        return super.httpRequestWithBody('POST', URL_USERS, body)
    }

    static post_login(type) {
        let body = Factory.bodyLogin(type)
        return super.httpRequestWithBody('POST', URL_LOGIN, body )
    }

    static get_user_id(type) {
        let id = Factory.getUserID(type)
        return super.httpRequestWithoutBody('GET', `${URL_USERS}/${id}`)
    }

    static put_user_by_id(id_type, body_type) {


        let id = Factory.getUserID(id_type);
        let body = Factory.getUserBody(body_type);
        return super.httpRequestWithBody('PUT', `${URL_USERS}/${id}`, body)
    }
/////////
    static delete_user(id_type) {
        let id = Factory.getUserID(id_type)
        return super.httpRequestWithoutBody('DELETE', `${URL_USERS}/${id}`)
    }
////////
    static post_produto(auth) {
        let body = {
            "nome": faker.name.firstName(),
            "preco": 12,
            "descricao": "lápis",
            "quantidade": 76
          }
          cy.wrap(body.nome).as('Nome_produto')
        return super.httpRequestWithBody('POST', URL_PRODUCT, body, {authorization: auth})
    }

    static get_all_products() {
        return super.httpRequestWithoutBody('GET', URL_PRODUCT)
    }

    static get_product_by_id(type) {
        let id = Factory.getProductID(type)
        return super.httpRequestWithoutBody('GET', `${URL_PRODUCT}/${id}`)
    }

    static put_product_by_id(id_type, body_type, auth) {
        
        let id = Factory.getProductID(id_type)
        let body = Factory.getProductBody(body_type)

        return super.httpRequestWithBody('PUT', `${URL_PRODUCT}/${id}`, body, {authorization: auth} )
    }
}