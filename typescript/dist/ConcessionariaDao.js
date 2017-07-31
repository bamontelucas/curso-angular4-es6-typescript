"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('inserindo', object);
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('atualizando', object);
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('removendo', id);
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('selecionando', id);
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('selecionando todos');
        return new Array();
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
