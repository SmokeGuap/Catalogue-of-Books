const currentYear = new Date().getFullYear();

export const findGoodBook = (books) => {
  const filteredBooks = books.filter((book) => {
    return currentYear - book.year >= 3;
  });
  if (filteredBooks.length === 0) {
    return null;
  }
  const maxRating = Math.max(...filteredBooks.map((book) => book.rating));
  const topBooks = filteredBooks.filter((book) => book.rating === maxRating);
  const randIndex = Math.floor(Math.random() * topBooks.length);
  const recommendedBook = topBooks[randIndex];
  return recommendedBook;
};
