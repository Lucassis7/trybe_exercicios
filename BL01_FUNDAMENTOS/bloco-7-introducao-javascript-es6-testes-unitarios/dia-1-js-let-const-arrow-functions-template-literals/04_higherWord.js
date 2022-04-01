const higherWord = (phrase) => {
  let arrWord = phrase.split(' ');
  let word = arrWord[0];
  for (let index = 0; index < arrWord.length; index += 1) {
    if (arrWord[index].length > word.length) {
      word = arrWord[index];
    }
  } return word;
}

console.log(higherWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
