Feature: Usuário

    
    Scenario: GET - Listar usuários    
        When request all the users
        Then must be responsed a schema "get_usuario" with status 200

    Scenario Outline: POST - Cadastrar usuário "<type>"
        When post the user of type "<type>"
        Then must be responsed a schema "post_usuario" with status <status>
        Examples:
            | type    | status |
            | valid   | 201    |
            | invalid | 400    |

    
    Scenario Outline: GET - USER BY ID "<id>"
        When request a user by id "<id>" 
        Then must be responsed a schema "get_usuario_id" with status <status>
        #And must have property "<property>" with value "<message>"
        Examples:
            | id      | status |
            | valid   | 200    |
            | invalid | 400    |

            

    Scenario Outline: PUT - Editar usuário por id "<id>"
        When put a user by id "<id>" and body "<body>" 
        Then must be responsed a schema "put_usuario_id" with status <status> 
        And must return a property "<property>" with a message "<message>"
        Examples:
            | id      | status | message                           | body           | property |
            | valid   | 200    | Registro alterado com sucesso     | full           | message  |
            | valid   | 400    | email não pode ficar em branco    | email empty    | email    |
            | valid   | 400    | password não pode ficar em branco | password empty | password |
            | invalid | 201    | Cadastro realizado com sucesso    | full           | message  |
            | valid   | 400    | Este email já está sendo usado    | same password  | message  |
            

        Scenario Outline: DELETE - Excluir usuário por id "<id>"
            When delete a user by id "<id>"
            Then must be responsed a schema "delete_usuario" with status <status>
            And must return a property "<property>" with a message "<message>"
            Examples:
                | id        | status | message                                                 | property |
                | valid     | 200    | Registro excluído com sucesso                           | message  |
                | invalid   | 200    | Nenhum registro excluído                                | message  |
                | with_cart | 400    | Não é permitido excluir usuário com carrinho cadastrado | message  |



    


