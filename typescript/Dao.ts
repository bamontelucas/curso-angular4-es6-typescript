import DaoInterface from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''
    
    inserir(object: T): boolean {
        console.log('inserindo', object)
        return true
    }
    atualizar(object: T): boolean {
        console.log('atualizando', object)
        return true
    }
    remover(id: number): T {
        console.log('removendo', id)
        return Object()
    }
    selecionar(id: number): T {
        console.log('selecionando', id)
        return Object()
    }
    selecionarTodos(): Array<T> {
        console.log('selecionando todos')
        return [Object()]
    }
}