const sum = require('./sum');

describe('Exercício 01:', () => {
  test('sum between 4 and 5 equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('sum between 0 and 0 equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('sum between 4 and "5" return error', () => {
    expect(() => { sum(4, "5") }).toThrow(Error);
  });

  test('invalid parameters returns error message', () => {
    expect(() => { sum(4, "5") }).toThrow('parameters must be numbers')
  });
});