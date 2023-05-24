export const sortFunc = (type, books) => {
  if (type == 'year') {
    const groupedData = books.reduce((acc, obj) => {
      if (obj.year == '') {
        obj.year = 0;
      }
      if (!acc[obj[type]]) {
        acc[obj[type]] = [];
      }
      acc[obj[type]].push(obj);
      return acc;
    }, {});
    const sortedBooks = Object.entries(groupedData).reverse();
    return sortedBooks;
  }
  if (type == 'rating') {
    const groupedData = books.reduce((acc, obj) => {
      if (!acc[obj[type]]) {
        acc[obj[type]] = [];
      }
      acc[obj[type]].push(obj);
      return acc;
    }, {});
    const sortedBooks = Object.entries(groupedData).reverse();
    return sortedBooks;
  }
  if (type == 'author') {
    books.sort((a, b) => {
      const wordsA = a.author.join(',');
      const wordsB = b.author.join(',');
      return wordsA.localeCompare(wordsB);
    });
    const groupedData = books.reduce((acc, obj) => {
      if (!acc[obj[type]]) {
        acc[obj[type]] = [];
      }
      acc[obj[type]].push(obj);
      return acc;
    }, {});
    const sortedBooks = Object.entries(groupedData);
    return sortedBooks;
  }
  return books;
};
