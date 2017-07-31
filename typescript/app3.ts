import Carro from './Carro'
import Moto from './Moto'

let c = new Carro('Corsa', 4)
let m = new Moto('Biz')
m.acelerar()
c.acelerar()

console.log(m, c)