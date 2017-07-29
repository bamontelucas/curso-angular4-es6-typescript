import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

let carroA = new Carro('Corsa', 2)
let carroB = new Carro('HB20', 4)
let carroC = new Carro('Veloster', 3)

let carros: Array<Carro> = [
    carroA,
    carroB,
    carroC
]

let concessionaria = new Concessionaria('Rua Dormevil Forastieri, 2-54', carros)
let cliente = new Pessoa('Lucas Corrêa', 'Corsa')

concessionaria.mostrarListaDeCarros().forEach((carro: Carro) => {
    if(carro.modelo === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
});

console.log(cliente.dizerCarroQueTem())