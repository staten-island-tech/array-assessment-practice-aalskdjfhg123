const books = [
  {
    name: "To Kill movie1 Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill movie1 Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book) => console.log(book.authorFirst, book.authorLast, "wrote", book.name, "in", book.publishDate))

//Sort books from oldest to most recent
const sortedBooks = books.sort((movie1, movie2) => movie1.publishDate - movie2.publishDate);
sortedBooks.forEach((book)=>console.log(book.name,book.publishDate))

//sort books alphabetically
const alphabeticallySort = titles.sort();
alphabeticallySort.forEach((book) => console.log(book))
//Find who wrote War and Peace
function warFinder(book){
  return book.name = "War and Peace";
}
const warWriter = books.find(warFinder)
console.log(warWriter.authorFirst,warWriter.authorLast);
//how many books were written before 1900?
const pre1900 = books.filter((book) => book.publishDate <= 1900)
const pre1900Count = pre1900.length
console.log(pre1900Count)
//was there at least one book published within the last 100 years?
const post1900 = books.filter((book) => book.publishDate >= 1900)
const post1900Count = post1900.length;
if(post1900Count >= 1){
  console.log("yes")
}
//was every book published within the last 100 years?
const everyBook = books.filter((book) => book.publishDate >= 1923)
const everyBookCount = everyBook.length
if(everyBookCount == 10){
  console.log("yes")
}else{
  console.log("no")
}
//print movie1 list of books that "includes" the genre historical
const historicalBooks = books.filter((book)=> book.genre.includes("historical"))
historicalBooks.forEach((book)=>console.log(book.name))