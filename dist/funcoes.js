"use strict";
// Atividade 01
Object.defineProperty(exports, "__esModule", { value: true });
exports.media = media;
exports.media2 = media2;
exports.movimentarCarteira = movimentarCarteira;
function media(a, b) {
    const nota = (a + b) / 2;
    const aprovado = (nota >= 6);
    console.log("A média do aluno é " + nota);
    console.log(`O aluno está ${aprovado ? 'aprovado' : 'reprovado'}`);
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
function movimentarCarteira(carteira, valor) {
    if (valor === 0) {
        console.error('O valor da transação não pode ser zero.');
        return;
    }
    if (valor > 0) {
        // entrada
        console.log(`Seu saldo atual é de R$${carteira.saldo.toFixed(2)}`);
        carteira.saldo += valor;
        console.log(`Entrada de R$${valor.toFixed(2)} adicionada. Saldo atual: R$${carteira.saldo.toFixed(2)}`);
    }
    else {
        // saída
        console.log(`Seu saldo atual é de R$${carteira.saldo.toFixed(2)}`);
        const valorSaida = Math.abs(valor); // usa o valor "absoluto" da saída
        if (valorSaida > carteira.saldo) {
            console.error(`Saída de R$${valorSaida.toFixed(2)} não pode ser realizada. Saldo insuficiente para esta transação.`);
            return;
        }
        carteira.saldo -= valorSaida;
        console.log(`Saída de R$${valorSaida.toFixed(2)} realizada. Saldo atual: R$${carteira.saldo.toFixed(2)}`);
    }
}
