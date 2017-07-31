// import {ConcessionariaDao} from './ConcessionariaDao'
// import {PessoaDao} from './PessoaDao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import {Dao} from './Dao'

let concessionaria: Concessionaria = new Concessionaria('Rua x', [])
let pessoa: Pessoa = new Pessoa('Lucas', 'Corsa')

// let c_dao: ConcessionariaDao = new ConcessionariaDao()
// let p_dao: PessoaDao = new PessoaDao()
// c_dao.inserir(concessionaria)
// p_dao.inserir(pessoa)

let c_dao: Dao<Concessionaria> = new Dao<Concessionaria>()
c_dao.inserir(concessionaria)

let p_dao: Dao<Pessoa> = new Dao<Pessoa>()
p_dao.atualizar(pessoa)