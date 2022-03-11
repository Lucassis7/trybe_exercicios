// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let number = 10;
let fatorial = 1;

for (let i = number; i > 1; i -= 1) {
    fatorial *= i;
}

console.log('O fatorial de ' + number + ' é ' + fatorial);
