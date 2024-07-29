import { Carteira, Produtos, Usuario, UsuarioDiretor, Pessoa } from "./interface";

// Atividade 01

export function media(a: number, b: number): { media: number, aprovado: boolean } {
    // entre parênteses são os parâmetros que a função utiliza e entre chaves são os objetos retornados pela função
    const nota = (a + b) / 2;

    const aprovado = (nota >= 6);

    console.log("A média do aluno é " + nota);
    console.log(`O aluno está ${aprovado ? 'aprovado' : 'reprovado'}`); // critério ? true : false

    return {
        media: nota,
        aprovado: aprovado
    };
}

// Atividade 02

export function media2 (a: number, b: number, c: number, aa: number, ba: number, ca: number){
    const nota = ((a*aa) + (b*ba) + (c*ca)) / 2

    return console.log ("Sua média é " + nota)
}

// Atividade 03

export function movimentarCarteira(carteira: Carteira, valor: number): void {

    if (valor === 0) {
        console.error('O valor da transação não pode ser zero.');
        return;
    }

    console.log(`Seu saldo atual é de R$${carteira.saldo.toFixed(2)}`);

    if (valor > 0) {
        // entrada
        carteira.saldo += valor;
        console.log(`Entrada de R$${valor.toFixed(2)} adicionada. Saldo final: R$${carteira.saldo.toFixed(2)}`);
    } else {
        // saída
        const valorSaida = Math.abs(valor); // usa o valor "absoluto" da saída
        if (valorSaida > carteira.saldo) {
            console.error(`Saída de R$${valorSaida.toFixed(2)} não pode ser realizada. Saldo insuficiente para esta transação.`);
            return;
        }
        carteira.saldo -= valorSaida;
        console.log(`Saída de R$${valorSaida.toFixed(2)} realizada. Saldo final: R$${carteira.saldo.toFixed(2)}`);
    }
}

// Atividade 04

export let produtos: Produtos[] = []
export let proximoId: number = 1

export function cadastrarProduto(nomeProduto: string, quantidade: number): void{
    console.log('Cadastro de produto')

    const novoProduto: Produtos = {
        id: proximoId++,
        nomeProduto: nomeProduto,
        quantidade: quantidade,
    }

    produtos.push(novoProduto);

    console.log(`Produto ${nomeProduto} cadastrado!`)
}

export function listarProdutos(): void {
  console.log("Lista de Produtos:");
  produtos.forEach((produto) => {
    console.log(`ID: ${produto.id}, Nome: ${produto.nomeProduto}, Quantidade: ${produto.quantidade}`);
  });
}

export function excluirProduto(id: number): void{
    console.log('Exclusão de produto')

    const index = produtos.findIndex((produto) => produto.id === id)

    if (index !== -1){
        const produtoExcluido = produtos.splice(index, 1)[0]
        console.log(`Produto ${produtoExcluido.nomeProduto} excluído!`)
    } else{
        console.log(`Produto com ID ${id} não encontrado`)
    }
}

// Atividade 05

export let usuarios: Usuario[] = []
export let pessoas: Pessoa[] = []

export function cadastrarUsuario (nome: string, idade: number, ocupacao: string, salario?: number): void{
    console.log('Cadastro de usuário')

    const novoUsuario: Usuario = {
        nome: nome,
        idade: idade, 
        ocupacao: ocupacao,
        salario: salario,
    }

    usuarios.push(novoUsuario);
    pessoas.push(novoUsuario);

    console.log(`Usuário ${nome} cadastrado!`)
}

export function listarUsuarios(): void {
    console.log("Lista de usuários:");
    usuarios.forEach((usuario) => {
        const valorSalario = usuario.salario !== undefined ? `R$${usuario.salario}` : "N/A"
      console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${valorSalario}`);
    });
}

// Atividade 06

export let diretores: UsuarioDiretor[] = []

export function cadastrarUsuarioDiretor (nomeDiretor: string, idadeDiretor: number, nivelComissionamento: number, salarioDiretor?: number): void{
    console.log('Cadastro de diretores')

    const novoUsuarioDiretor: UsuarioDiretor = {
        nomeDiretor: nomeDiretor,
        idadeDiretor: idadeDiretor, 
        salarioDiretor: salarioDiretor,
        nivelComissionamento: nivelComissionamento,
    }

    diretores.push(novoUsuarioDiretor);
    pessoas.push(novoUsuarioDiretor);

    console.log(`Diretor(a) ${nomeDiretor} cadastrado!`)
}

export function listarDiretores(): void {
    console.log("Lista de diretores");
    diretores.forEach((diretores) => {
        const valorSalarioDiretor = diretores.salarioDiretor !== undefined ? `R$${diretores.salarioDiretor}` : "N/A"
      console.log(`Diretor(a) ${diretores.nomeDiretor}, ${diretores.idadeDiretor} anos, comissão nível ${diretores.nivelComissionamento}, salário ${valorSalarioDiretor}`);
    });
}

// Atividade 07

export function listarPessoas(): void {
    console.log("Lista de pessoas:");
    pessoas.forEach((pessoa) => {
      if ('nome' in pessoa) { //se for pessoa
        const valorSalario = pessoa.salario !== undefined ? `R$${pessoa.salario}` : 'N/A';
        console.log(`${pessoa.nome}, ${pessoa.idade} anos, ${pessoa.ocupacao}, salário ${valorSalario}`);
      } else { // se for diretor
        const valorSalarioDiretor = pessoa.salarioDiretor !== undefined ? `R$${pessoa.salarioDiretor}` : 'N/A';
        console.log(`Diretor(a) ${pessoa.nomeDiretor}, ${pessoa.idadeDiretor} anos, comissão nível ${pessoa.nivelComissionamento}, salário ${valorSalarioDiretor}`);
      }
    });
  }