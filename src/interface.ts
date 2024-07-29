export interface Carteira {
    saldo: number,
    transacoes: number,
}

export interface Produtos {
    id: number,
    nomeProduto: string,
    quantidade: number,
}

export interface Usuario {
    nome: string, 
    idade: number, 
    ocupacao: string,
    salario?: number,
}

export interface UsuarioDiretor {
    nomeDiretor: string,
    idadeDiretor: number,
    salarioDiretor?: number,
    nivelComissionamento: number,
}

export type Pessoa = Usuario | UsuarioDiretor