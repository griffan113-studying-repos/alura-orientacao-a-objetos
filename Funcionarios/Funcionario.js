export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    get senha() { //acessores
        return this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    registro(senha) {
        this._senha = senha;
    }
}