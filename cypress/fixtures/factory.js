import faker from 'faker'

export class Factory {
    static createUserBody(type, admin = true) {
       
        switch(type) {
            case 'valid':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": admin.toString()
                }
            case 'invalid': 
                return {
                    "nome": "Fulano da Silva",
                    "email": "beltranoqa@qa.com.br",
                    "password":  "teste",
                    "administrador": "true"
                }

            case 'empty':
                return {
                    "nome": "",
                    "email": "",
                    "password": "",
                    "administrador": admin.toString() 
                }

            default:
                return {notfound: "The user type was not found, please verify!"}
        }
    }


    static bodyLogin(type) {
        switch(type) {
            case 'valid': 
                return {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
             
            case 'invalid':
                return {
                    "email": faker.internet.email(),
                    "password": faker.internet.password()
                }  
                
            case 'empty_email':
                return {
                    "email": "",
                    "password": "abcde"
                }

            case 'empty_password':
                return {
                    "email": faker.internet.email(),
                    "password": ""
                }
        }

    }

    static getUserID(type) {
        switch(type) {
            case 'valid':
                return "AkOxYd0t3gj35c0k"                    
            
            case 'invalid':
                return "123456"
            
            case 'with_cart':
                return "8X5JgibnApdYb3O2"

            default: console.log("opção indisponível")
        }

        
    }

    static getUserBody(type) {
        switch(type){

            case 'full':
                return {
                    "nome": faker.name.firstName(),
                    "email": faker.internet.email(),
                    "password": "teste",
                    "administrador": "false"
                }

            case 'email empty':
                return {                                  
                       "nome": "maria",
                       "email": "",
                       "password": "teste",
                       "administrador": "false"
                    }

            case 'password empty':
                return {                                  
                    "nome": "maria",
                    "email": "beltrano@qa.com.br",
                    "password": "",
                    "administrador": "false"       
                 }

            case 'same password':
                return {
                    "nome": "maria",
                    "email": "beltrano@qa.com.br",
                    "password": "teste",
                    "administrador": "false"  
                }
                     
            }
        }

        static getProductID(type) {
            switch(type) {
                case 'valid':
                    return "GGw2vrUMfpEW94Rf"                    
                
                case 'invalid':
                    return "123456"
        
                default: console.log("opção indisponível")
            }
    
            
        }

        static getProductBody(type) {
            switch(type) {
                case 'full':
                    return {
                        "nome": faker.name.firstName(),
                        "preco": 325,
                        "descricao": faker.name.firstName(),
                        "quantidade": 76   
                    }
                    
                case 'empty_name':
                    return {
                        "nome": "",
                        "preco": 325,
                        "descricao": "eletro",
                        "quantidade": 76   
                    }

                case 'empty_description':
                    return {
                        "nome": "celular",
                        "preco": 325,
                        "descricao": "",
                        "quantidade": 76   
                    }

                case 'same_name':
                    
                 let nome = cy.get('@Nome_produto')
                    return {
                        "nome": nome,
                        "preco": 325,
                        "descricao": "eletro",
                        "quantidade": 76   
                    }
                
            }
        }

        

      

        
        
        
        
        



    }

    
        
    


