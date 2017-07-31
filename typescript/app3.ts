import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let c = new Carro('Corsa', 4)
let m = new Moto('Biz')
m.acelerar()
c.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(m)
console.log(c)
console.log(concessionaria.fornecerHorariosDeFuncionamento())