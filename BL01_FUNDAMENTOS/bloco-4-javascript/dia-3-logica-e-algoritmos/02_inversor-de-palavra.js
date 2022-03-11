// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let arr = [];
let arrInverse = [];

for (letter of word) {
    arr.push(letter);
}

for (let index = (arr.length - 1); index >= 0; index -= 1) {
    arrInverse.push(arr[index]);
}

console.log(arrInverse.join());


// outra forma 

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);