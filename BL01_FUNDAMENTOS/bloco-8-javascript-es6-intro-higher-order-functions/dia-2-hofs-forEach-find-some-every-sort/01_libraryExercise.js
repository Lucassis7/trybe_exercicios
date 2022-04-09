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

// exercício 01:

const getPersonBorn1947 = () => {
  const author = books.find((element) => element.author.birthYear === 1947);
  return author.author.name;
};

// console.log(getPersonBorn1947());

// exercício 02:

const shortBook = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};

// console.log(shortBook());

// exercicio 03:

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
};

// console.log(getNamedBook());

// exercício 04:

const orderBooks = books.sort((yearOne, yearTwo) => yearTwo.releaseYear - yearOne.releaseYear);

// console.log(orderBooks);

// exercício 05:

const everyoneWasBornOnSecXX = () => {
  return books.every((authors) => authors.author.birthYear > 1900);
};

// console.log(everyoneWasBornOnSecXX());

// exercício 06:

function someBookWasReleaseOnThe80s() {
  const eigthiesBooks = books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990);
  return eigthiesBooks;
};

// console.log(someBookWasReleaseOnThe80s());

// exercício 07:

function authorUnique() {
  return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
};

console.log(authorUnique());