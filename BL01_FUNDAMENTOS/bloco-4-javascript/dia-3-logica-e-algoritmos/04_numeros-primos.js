// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let higherNumber = 0;

for (let atualNumber = 1; atualNumber <= 50; atualNumber += 1) {
    let primeNumber = true;
    for (let atualDivisor = 2; atualDivisor < atualNumber; atualDivisor += 1) {
        if (atualNumber % atualDivisor === 0) {
            primeNumber = false;
        }
    }
    if (primeNumber === true) {
        higherNumber = atualNumber;
    }

}

console.log(higherNumber);
