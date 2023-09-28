const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring

const book = getBook(3);
const { title, author, genres, publicationDate, pages } = book;
console.log(title, author, genres);

// Rest/Spread
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(otherGenres);
const newGenres = [...genres, "epic"];
console.log(newGenres);
const updatedBook = { ...book, movieReleaseDate: "2001" }; // adding new property using spread
console.log(updatedBook);

// Template literals
const getYear = (str) => str.split("-")[0];
const summary = `${title} is a book by ${author} published in ${getYear(
  publicationDate
)}.`;
summary;

// Ternaries
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;

// Arrow functions
// function getYear(str) {
//   return str.split("-")[0];
// }
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// Short-circuiting
console.log(false && "Some string");
console.log(true && "Some string");

console.log(false || "Some string");
console.log(true || "Some string");

const spanishTranslation = book.translations.spanish || "NONE";
spanishTranslation;
// Null coalescing
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
*/

/*
const books = getBooks();

// Map
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

// Array filter
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => book.title);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce
const allPages = books.reduce((sum, book) => sum + book.pages, 0);
allPages;

// Sort
const y = [3, 6, 2, 7, 1];
const sorted = y.sort((a, b) => a - b);
y;
// use slice() to not mutate original data
const sortedYear = books
  .slice()
  .sort(
    (a, b) =>
      parseInt(a.publicationDate.split("-")[0]) -
      parseInt(b.publicationDate.split("-")[0])
  );
const d = sortedYear.map((book) => ({
  title: book.title,
  publicationDate: book.publicationDate.split("-")[0],
}));
d;

// Immutatable array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
