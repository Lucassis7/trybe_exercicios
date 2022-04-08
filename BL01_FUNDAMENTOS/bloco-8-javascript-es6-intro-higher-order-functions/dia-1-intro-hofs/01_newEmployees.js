const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const returnObject = (completeName) => {
  const arraySeparated = completeName.split(' ');
  const people = {
    completeName,
    email: `${arraySeparated[0].toLowerCase()}_${arraySeparated[1].toLowerCase()}@betrybe.com`,
  };
  return people;
}

// console.log(returnObject('Pedro Guerra'));
console.log(newEmployees(returnObject));
