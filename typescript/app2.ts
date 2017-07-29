class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade+= 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carro: Carro
    private carroPreferido: string

    constructor(nome:string, carroPreferido:string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

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