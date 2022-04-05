const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ex 01:
const objectModifier = (object, key, value) => {
  object[`${key}`] = value;
};
objectModifier(lesson2, 'turno', 'noite');

// ex 02:
const showKeys = (object) => console.log(Object.keys(object)); 
// showKeys(lesson1);

// ex 03:
const lengthObject = (object) => console.log(Object.keys(object).length);
// lengthObject(lesson2);

// ex 04:
const showValues = (object) => console.log(Object.values(object));
// showValues(lesson3);

// ex 05:
const allLessons = {lesson1, lesson2, lesson3};
// console.table(allLessons)

// ex 06:
const sumStudents = (object) => {
  let total = 0;
  const array = Object.keys(object); 
  for (index in array) { 
    total += object[array[index]].numeroEstudantes;
  } return total;
};
// console.log(sumStudents(allLessons));

// ex 07:
const getValueByNumber = (object, index) => (Object.values(object)[index]);
// console.log(getValueByNumber(lesson1, 0));

// ex 08:
const verifyEntrie = (object, key, value) => {
  const array = Object.entries(object);
  let equal = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) equal = true;
  } return equal;
};

console.log(verifyEntrie(lesson3, 'materia', 'Maria Clara'));
