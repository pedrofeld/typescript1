"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcoes_1 = require("./funcoes");
/*
Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.
*/
console.log("-----------Atividade 01----------");
const resultado = (0, funcoes_1.media)(10, 8);
console.log(resultado);
/*
Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
*/
console.log("-----------Atividade 02----------");
const resultado2 = (0, funcoes_1.media2)(9, 9, 9, 1, 2, 3); // 3 notas no início e a sequência dos últimos 3 números é o peso de cada nota respectivamente
/*
Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.
*/
console.log("-----------Atividade 03----------");
const transacao = {
    saldo: 4000,
    transacoes: 0,
};
try {
    (0, funcoes_1.movimentarCarteira)(transacao, 1000); // entrada de R$1000 (positivo)
    (0, funcoes_1.movimentarCarteira)(transacao, -500); // saída de R$500 (negativo)
    (0, funcoes_1.movimentarCarteira)(transacao, -10000); // saldo insuficiente, deve gerar erro (negativo mto alto)
}
catch (error) {
    console.error('Algo deu errado');
}
/*
Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.
*/
console.log("-----------Atividade 04----------");
(0, funcoes_1.cadastrarProduto)("Lápis", 10);
(0, funcoes_1.cadastrarProduto)("Caderno", 20);
(0, funcoes_1.listarProdutos)();
(0, funcoes_1.excluirProduto)(1);
(0, funcoes_1.listarProdutos)();
/*
Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”

AQUI NÃO DIZ QUE É PARA EXCLUIR, APENAS PARA MOSTRAR
*/
console.log("-----------Atividade 05----------");
(0, funcoes_1.cadastrarUsuario)("Pedro", 19, "CPO", 20000000);
(0, funcoes_1.cadastrarUsuario)("Maria", 20, "estagiária");
(0, funcoes_1.listarUsuarios)();
/*
Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
*/
console.log("-----------Atividade 06----------");
(0, funcoes_1.cadastrarUsuarioDiretor)("Joana", 19, 5, 20000000);
(0, funcoes_1.cadastrarUsuarioDiretor)("Joaquim", 20, 1);
(0, funcoes_1.listarDiretores)();
/*
Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor.
*/
console.log('-----------Atividade 07----------');
(0, funcoes_1.listarPessoas)();
