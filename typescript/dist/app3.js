"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var c = new Carro_1.default('Corsa', 4);
var m = new Moto_1.default('Biz');
m.acelerar();
c.acelerar();
console.log(m, c);
