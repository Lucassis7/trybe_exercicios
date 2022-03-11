// Considere o array de strings abaixo, escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

    // algoritmo para maior string do array

let higherWord = '';

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > higherWord.length) {
        higherWord = array[index];
    }
} console.log('A maior palavra do array foi: ' + higherWord);

    // algoritmo para menor string do array
    
let smallerWord = array[0]

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallerWord.length) {
        smallerWord = array[index];
    }
} console.log('A menor palavra do array foi: ' + smallerWord);
