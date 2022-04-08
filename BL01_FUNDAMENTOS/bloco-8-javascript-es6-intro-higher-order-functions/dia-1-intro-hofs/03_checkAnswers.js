const checkAnswers = (correctAnswers, studentAnswers, checkFunction) => {
  return checkFunction(correctAnswers, studentAnswers);
};

const validateAnswers = (correctArray, answerArray) => {
  let finalNote = 0;
  for (let index = 0; index < correctArray.length; index += 1) {
    if (answerArray[index] === 'N.A') {
      finalNote += 0;
    } else if (answerArray[index] === correctArray[index]) {
      finalNote += 1;
    } else if (answerArray[index] !== correctArray[index]) {
      finalNote -= 0.5;
    };
  } return finalNote
}

console.log(checkAnswers(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], validateAnswers));