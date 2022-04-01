const oddsAndEvens = ([13, 3, 4, 10, 7, 2]);

// Seu código aqui.
const orderArray = (array) => {
  return array.sort((a, b) => a - b);
}

console.log(`Os números ${orderArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉