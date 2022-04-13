const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const nameAndAverage = students.map((student, indexArray) => ({
    name: student,
    average: (grades[indexArray].reduce((acc, curr) => acc + curr, 0) / grades[indexArray].length),
  }));
  return nameAndAverage
};

console.log(studentAverage());
