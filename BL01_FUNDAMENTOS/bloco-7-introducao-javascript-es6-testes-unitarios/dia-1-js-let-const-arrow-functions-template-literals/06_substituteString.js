const mainSkills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'Bootstrap'];

const substituteString = (phrase, parameter) => {
  const arrPhrase = phrase.split(' '); 
  for (let index = 0; index < arrPhrase.length; index += 1) {
    if (arrPhrase[index] === 'x') {
      arrPhrase[index] = parameter;
    }
  } return arrPhrase.join(' ');
}

const finalString = (firstString, array) => {
  const sortedArray = array.sort();
  return `${firstString} Minhas cinco principais habilidades são: ${sortedArray.join(', ')}!`
}

console.log(finalString(substituteString('Tryber x aqui!', 'Lucas'), mainSkills));