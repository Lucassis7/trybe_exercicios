const myRemove = require('./myRemove');

describe('Exercício 02:', () => {
  test('function return the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});