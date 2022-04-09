const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((stringArray) => stringArray.length === 5);
}

console.log(findNameWithFiveLetters());