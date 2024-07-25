// Atividade 01

export function media(a: number, b: number): { media: number, aprovado: boolean } {
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

export function media2 (a: number, b: number, c: number, aa: number, ba: number, ca: number){
    const nota = ((a*aa) + (b*ba) + (c*ca)) / 2

    return console.log ("Sua média é " + nota)
}

// Atividade 03

import { Carteira } from "./interface";

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

/*
Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.
*/
