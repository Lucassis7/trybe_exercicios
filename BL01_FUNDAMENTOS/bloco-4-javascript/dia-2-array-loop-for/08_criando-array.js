// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado:

let arr = [];
let number = 1;

for (let index = 0; index < 25; index += 1) {
    arr.push(number);
    number += 1;
}

console.log(arr);
