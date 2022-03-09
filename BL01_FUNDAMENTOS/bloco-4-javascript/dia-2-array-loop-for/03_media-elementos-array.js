// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

// media = (sum / numbers.length);
// console.log('A média aritmética da soma dos números contidos no array foi: ' + media);

console.log('A média foi: ' + (sum / numbers.length));
