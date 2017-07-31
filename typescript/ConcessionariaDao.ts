import DaoInterface from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'
    
    inserir(object: Concessionaria): boolean {
        console.log('inserindo', object)
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('atualizando', object)
        return true
    }
    remover(id: number): Concessionaria {
        console.log('removendo', id)
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('selecionando', id)
        return new Concessionaria('', [])
    }
    selecionarTodos(): Array<Concessionaria> {
        console.log('selecionando todos')
        return new Array()
    }
}