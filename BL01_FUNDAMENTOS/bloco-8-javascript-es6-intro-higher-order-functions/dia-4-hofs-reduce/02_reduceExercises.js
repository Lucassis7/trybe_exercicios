const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// exercício 02: Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = (genericArray) => {
  return genericArray.map((element) => element.author.name).reduce((acumulator, current) => `${acumulator}, ${current}`);
};

// console.log(reduceNames(books));

// exercício 03: Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = (genericArray) => {
  return (genericArray.reduce((acumulator, current) => (
    acumulator + (current.releaseYear - current.author.birthYear)), 0) / (genericArray.length));
};


// console.log(averageAge(books));

// exercício 04: Encontre o livro com o maior nome.

const longestNamedBook = (genericArray) => {
  const longestBook = genericArray.reduce((acc, curr) => (acc.name.length > curr.name.length) ? acc : curr);
  return longestBook;
};

console.log(longestNamedBook(books));