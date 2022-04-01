const factorial = (number) => {
  let fact = 1;
  for (let index = number; index >= 1; index -= 1) {
    fact *= index;
  } return fact;
}

console.log(factorial(5));
