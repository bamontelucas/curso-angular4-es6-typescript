"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var carroA = new Carro_1.default('Corsa', 2);
var carroB = new Carro_1.default('HB20', 4);
var carroC = new Carro_1.default('Veloster', 3);
var carros = [
    carroA,
    carroB,
    carroC
];
var concessionaria = new Concessionaria_1.default('Rua Dormevil Forastieri, 2-54', carros);
var cliente = new Pessoa_1.default('Lucas Corrêa', 'Corsa');
concessionaria.mostrarListaDeCarros().forEach(function (carro) {
    if (carro.modelo === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
