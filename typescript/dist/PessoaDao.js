"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDao = (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('inserindo', object);
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('atualizando', object);
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('removendo', id);
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('selecionando', id);
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('selecionando todos');
        return new Array();
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
