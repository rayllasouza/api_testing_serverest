import Rest from "./common/_rest.service";

const URL_USERS = '/users'

export class Gorest extends Rest {
    
    static buscarTodosOsUsuarios() {
        return super.get(URL_USERS)
    }
}