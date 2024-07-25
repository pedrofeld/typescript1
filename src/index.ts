import { Carteira, Produtos } from "./interface";
import { media, media2, movimentarCarteira } from "./funcoes";

/* 
Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.
*/

console.log("-----------Atividade 01----------")
const resultado = media(10, 8);
console.log(resultado)

/*
Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
*/

console.log("-----------Atividade 02----------")
const resultado2 = media2(9, 9, 9, 1, 2, 3);

/*
Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.
*/

console.log("-----------Atividade 03----------")

const transacao: Carteira = {
    saldo: 4000,
    transacoes: 0,
}

try {
    movimentarCarteira(transacao, 1000); // entrada de R$1000 (positivo)
    movimentarCarteira(transacao, -500); // saída de R$500 (negativo)
    movimentarCarteira(transacao, -10000); // saldo insuficiente, deve gerar erro (negativo mto alto)
} catch (error) {
    console.error('Algo deu errado');
}


/*
Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.
*/

console.log("-----------Atividade 04----------")

const caderno: Produtos = {
    nomeProduto: "caderno de 96 folhas",
    quantidade: 100,
}