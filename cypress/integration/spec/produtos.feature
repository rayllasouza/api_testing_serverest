Feature: Produtos

    Scenario: POST - Cadastrar produtos
        Given that the user is of type admin and is authenticated
        When create a valid product
        Then must be responsed a schema "post_produto" with status 201
        

    Scenario: GET - Listar todos os produtos
        When request all products
        Then must be responsed a schema "get_produto" with status 200

    Scenario Outline: GET - Buscar produtos por id "<id>"
        When request all products by id "<id>"
        Then must be responsed a schema "get_produto_id" with status <status>
        #And must return a property "<property>" with a message "<message>"
        Examples:
            | id      | status |
            | valid   | 200    |
            | invalid | 400    |


    Scenario Outline: PUT - Editar produtos por id "<id>"
        Given that the user is of type admin and is authenticated
        When put a product by id "<id>" and body "<body>"
        Then must be responsed a schema "put_produto_id" with status <status> 
        And must return a property "<property>" with a message "<message>"
        Examples:
            | id      | body              | status | property    | message                                                                         |
            | valid   | full              | 200    | message     | Registro alterado com sucesso                                                   |
            | invalid | full              | 201    | message     | Cadastro realizado com sucesso                                                  |
            #| valid   | same_name         | 400    | message     | Já existe produto com esse nome                                                 |
            #| X       | X                 | 401    | x           | Token de acesso ausente, inválido, expirado ou usuário do token não existe mais |
            | valid   | empty_name        | 400    | nome        | nome não pode ficar em branco                                                   |
            | valid   | empty_description | 400    | descricao | descricao não pode ficar em branco                                                   |
           # | X       | X                 | 403    | x           | Rota exclusiva para administradores                                             |

        
    Scenario: PUT - Repetir nome de produto já cadastrado
        Given that the user is of type admin and is authenticated
        And already has a product created
        When put a product by id "valid" and body "same_name"
        Then must be responsed a schema "put_produto_id" with status 400 
        And must return a property "message" with a message "Já existe produto com esse nome"