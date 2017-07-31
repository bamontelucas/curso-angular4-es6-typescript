import DaoInterface from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'
    
    inserir(object: Pessoa): boolean {
        console.log('inserindo', object)
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('atualizando', object)
        return true
    }
    remover(id: number): Pessoa {
        console.log('removendo', id)
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa {
        console.log('selecionando', id)
        return new Pessoa('', '')
    }
    selecionarTodos(): Array<Pessoa> {
        console.log('selecionando todos')
        return new Array()
    }
}