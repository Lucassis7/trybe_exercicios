const myFizzBuzz = require('./myFizzBuzz');

describe('Exercício 03:', () => {
  test('return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('return "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('return "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('return the same number not divisible', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });

  test('return false, because its not a number', () => {
    expect(myFizzBuzz("a")).toBeFalsy();
  });
});