"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diretores = exports.pessoas = exports.usuarios = exports.proximoId = exports.produtos = void 0;
exports.media = media;
exports.media2 = media2;
exports.movimentarCarteira = movimentarCarteira;
exports.cadastrarProduto = cadastrarProduto;
exports.listarProdutos = listarProdutos;
exports.excluirProduto = excluirProduto;
exports.cadastrarUsuario = cadastrarUsuario;
exports.listarUsuarios = listarUsuarios;
exports.cadastrarUsuarioDiretor = cadastrarUsuarioDiretor;
exports.listarDiretores = listarDiretores;
exports.listarPessoas = listarPessoas;
// Atividade 01
function media(a, b) {
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
function media2(a, b, c, aa, ba, ca) {
    const nota = ((a * aa) + (b * ba) + (c * ca)) / 2;
    return console.log("Sua média é " + nota);
}
// Atividade 03
function movimentarCarteira(carteira, valor) {
    if (valor === 0) {
        console.error('O valor da transação não pode ser zero.');
        return;
    }
    console.log(`Seu saldo atual é de R$${carteira.saldo.toFixed(2)}`);
    if (valor > 0) {
        // entrada
        carteira.saldo += valor;
        console.log(`Entrada de R$${valor.toFixed(2)} adicionada. Saldo final: R$${carteira.saldo.toFixed(2)}`);
    }
    else {
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
exports.produtos = [];
exports.proximoId = 1;
function cadastrarProduto(nomeProduto, quantidade) {
    console.log('Cadastro de produto');
    const novoProduto = {
        id: exports.proximoId++,
        nomeProduto: nomeProduto,
        quantidade: quantidade,
    };
    exports.produtos.push(novoProduto);
    console.log(`Produto ${nomeProduto} cadastrado!`);
}
function listarProdutos() {
    console.log("Lista de Produtos:");
    exports.produtos.forEach((produto) => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nomeProduto}, Quantidade: ${produto.quantidade}`);
    });
}
function excluirProduto(id) {
    console.log('Exclusão de produto');
    const index = exports.produtos.findIndex((produto) => produto.id === id);
    if (index !== -1) {
        const produtoExcluido = exports.produtos.splice(index, 1)[0];
        console.log(`Produto ${produtoExcluido.nomeProduto} excluído!`);
    }
    else {
        console.log(`Produto com ID ${id} não encontrado`);
    }
}
// Atividade 05
exports.usuarios = [];
exports.pessoas = [];
function cadastrarUsuario(nome, idade, ocupacao, salario) {
    console.log('Cadastro de usuário');
    const novoUsuario = {
        nome: nome,
        idade: idade,
        ocupacao: ocupacao,
        salario: salario,
    };
    exports.usuarios.push(novoUsuario);
    exports.pessoas.push(novoUsuario);
    console.log(`Usuário ${nome} cadastrado!`);
}
function listarUsuarios() {
    console.log("Lista de usuários:");
    exports.usuarios.forEach((usuario) => {
        const valorSalario = usuario.salario !== undefined ? `R$${usuario.salario}` : "N/A";
        console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${valorSalario}`);
    });
}
// Atividade 06
exports.diretores = [];
function cadastrarUsuarioDiretor(nomeDiretor, idadeDiretor, nivelComissionamento, salarioDiretor) {
    console.log('Cadastro de diretores');
    const novoUsuarioDiretor = {
        nomeDiretor: nomeDiretor,
        idadeDiretor: idadeDiretor,
        salarioDiretor: salarioDiretor,
        nivelComissionamento: nivelComissionamento,
    };
    exports.diretores.push(novoUsuarioDiretor);
    exports.pessoas.push(novoUsuarioDiretor);
    console.log(`Diretor(a) ${nomeDiretor} cadastrado!`);
}
function listarDiretores() {
    console.log("Lista de diretores");
    exports.diretores.forEach((diretores) => {
        const valorSalarioDiretor = diretores.salarioDiretor !== undefined ? `R$${diretores.salarioDiretor}` : "N/A";
        console.log(`Diretor(a) ${diretores.nomeDiretor}, ${diretores.idadeDiretor} anos, comissão nível ${diretores.nivelComissionamento}, salário ${valorSalarioDiretor}`);
    });
}
// Atividade 07
function listarPessoas() {
    console.log("Lista de pessoas:");
    exports.pessoas.forEach((pessoa) => {
        if ('nome' in pessoa) { //se for pessoa
            const valorSalario = pessoa.salario !== undefined ? `R$${pessoa.salario}` : 'N/A';
            console.log(`${pessoa.nome}, ${pessoa.idade} anos, ${pessoa.ocupacao}, salário ${valorSalario}`);
        }
        else { // se for diretor
            const valorSalarioDiretor = pessoa.salarioDiretor !== undefined ? `R$${pessoa.salarioDiretor}` : 'N/A';
            console.log(`Diretor(a) ${pessoa.nomeDiretor}, ${pessoa.idadeDiretor} anos, comissão nível ${pessoa.nivelComissionamento}, salário ${valorSalarioDiretor}`);
        }
    });
}
