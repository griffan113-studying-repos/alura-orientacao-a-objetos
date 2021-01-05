import {Cliente} from './Cliente.js'
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { Auth } from './Auth.js';

const diretor = new Diretor("Rodrigo", 10000, 2223334445);
const gerente = new Gerente("Ricardo", 5000, 33344455566);

diretor.registro(123456)
const diretorEstaLogado = Auth.login(diretor, "123456");
const cliente = new Cliente("Lais", 8989989999, "456")

const clienteEstaLogado = Auth.login(cliente, "456");

console.log(estaLogado); 