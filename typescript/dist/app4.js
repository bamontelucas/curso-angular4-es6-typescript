"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {ConcessionariaDao} from './ConcessionariaDao'
// import {PessoaDao} from './PessoaDao'
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var Dao_1 = require("./Dao");
var concessionaria = new Concessionaria_1.default('Rua x', []);
var pessoa = new Pessoa_1.default('Lucas', 'Corsa');
// let c_dao: ConcessionariaDao = new ConcessionariaDao()
// let p_dao: PessoaDao = new PessoaDao()
// c_dao.inserir(concessionaria)
// p_dao.inserir(pessoa)
var c_dao = new Dao_1.Dao();
c_dao.inserir(concessionaria);
var p_dao = new Dao_1.Dao();
p_dao.atualizar(pessoa);
