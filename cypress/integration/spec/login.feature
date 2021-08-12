Feature: Login

    Scenario Outline: POST - Login "<type>"
            When make a post of type "<type>" from /login 
            Then must be responsed the schema "post_login" with status <status>
            And must have property "<property>" with value "<message>"
            Examples:
            | type           | status | message                           | property |
            | valid          | 200    | Login realizado com sucesso       | message  |
            | invalid        | 401    | Email e/ou senha inválidos        | message  |
            | empty_email    | 400    | email não pode ficar em branco    | email    |
            | empty_password | 400    | password não pode ficar em branco | password |