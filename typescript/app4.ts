import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import {PessoaDao} from './PessoaDao'
import Pessoa from './Pessoa'

let c_dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria: Concessionaria = new Concessionaria('Rua x', [])

c_dao.inserir(concessionaria)

let p_dao: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('Lucas', 'Corsa')

p_dao.inserir(pessoa)