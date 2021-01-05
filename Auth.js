/* 
    Ser autenticavel significa ter o método "autenticar"

    Ducky Typing
*/

export class Auth {
    static login(autenticavel, senha) {
        if (Auth.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
    }
    static ehAutenticavel(autenticavel) {
        return "autenticar" in  autenticavel && autenticavel.autenticar instanceof Function;
    }
}