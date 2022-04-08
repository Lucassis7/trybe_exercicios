const checkNumber = (randomNumber, chooseNumber) => {
  return (randomNumber === chooseNumber) ? `Parabéns, você ganhou!` : `Tente novamente!`;
};

const raffleFunction = (number, functionCheck) => {
  const sortedNumber = (Math.ceil(Math.random() * 5));
  return functionCheck(sortedNumber, number);
};

console.log(raffleFunction(3, checkNumber));
