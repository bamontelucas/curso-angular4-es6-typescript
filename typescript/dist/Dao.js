"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('inserindo', object);
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('atualizando', object);
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('removendo', id);
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('selecionando', id);
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('selecionando todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
