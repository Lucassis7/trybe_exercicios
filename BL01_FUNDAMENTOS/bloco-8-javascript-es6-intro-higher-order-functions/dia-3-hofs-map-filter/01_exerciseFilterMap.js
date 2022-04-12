const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George Q. R. R. Martin',
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

// exercício 01: Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = (genericArray) => {
  return genericArray.map((book) => {
    const NOME_DO_LIVRO = book.name;
    const GÊNERO_DO_LIVRO = book.genre;
    const NOME_DA_PESSOA_AUTORA = book.author.name;
    return `${NOME_DO_LIVRO} - ${GÊNERO_DO_LIVRO} - ${NOME_DA_PESSOA_AUTORA}`;
  });
};

// const formatedBookNames = (genericArray) => {
//   return genericArray.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// };

// console.log(formatedBookNames(books));

// exercício 02: Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const nameAndAge = (genericArray) => {
  return genericArray.map((book) => (
    {
      age: book.releaseYear - book.author.birthYear, 
      author: book.author.name,
    }
  )).sort((authorOne, authorTwo) => authorOne.age - authorTwo.age);
};

// console.log(nameAndAge(books));

// exercício 03: Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = (genericArray) => {
  return genericArray.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
};

// console.log(fantasyOrScienceFiction(books));

// exercício 04: Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const oldBooksOrdered = (genericArray) => {
  return genericArray.filter((book) => (2022 - book.releaseYear) > 60).sort((yearOne, yearTwo) => yearOne.releaseYear - yearTwo.releaseYear);
};

// console.log(oldBooksOrdered(books));

// exercício 05: Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthorsInOrder = (genericArray) => {
  const fantasyScienceArray = genericArray.filter((bookGenre) => bookGenre.genre === 'Fantasia' || bookGenre.genre === 'Ficção Científica');
  return (fantasyScienceArray.map((authors) => authors.author.name)).sort();
};

// console.log(fantasyOrScienceFictionAuthorsInOrder(books));

// exercício 06: Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (genericArray) => {
  const oldBooksArray = genericArray.filter((year) => 2022 - year.releaseYear > 60);
  return oldBooksArray.map((nameBook) => nameBook.name);
};

// console.log(oldBooks(books));

// exercício 07: Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const authorWith3DotsName = (genericArray) => {
  const authorArray = genericArray.map((authors) => authors.author.name);
  const nameAuthor = authorArray.filter((author) => author.split('.').length > 3);
  const realAuthor = nameAuthor.map((element) => element.split('.'));
  const finalAuthor = realAuthor.filter((elementArray) => elementArray[0].length <= 2 && elementArray[1].length <= 2 && elementArray[2].length <= 2)[0].join('.');
  return genericArray.find((book) => book.author.name === finalAuthor).name;
};

console.log(authorWith3DotsName(books));
