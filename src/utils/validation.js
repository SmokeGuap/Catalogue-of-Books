import { ISBNValidation } from './ISBN';

export const validation = (book) => {
  let errors = {};
  if (book.name == '') {
    errors = { ...errors, name: 'Вы забыли указать название!' };
  }
  if (book.author == '') {
    errors = { ...errors, author: 'Вы забыли указать автора!' };
  }
  if (book.year && (book.year < 1800 || book.year > 2023)) {
    errors = {
      ...errors,
      year: 'Год издания должен быть между 1800 и текущим годом!',
    };
  }
  if (book.rating < 0 || book.rating > 10) {
    errors = { ...errors, rating: 'Рейтинг  должен быть между 0 и 10!' };
  }
  if (book.ISBN && !ISBNValidation(book.ISBN)) {
    errors = { ...errors, ISBN: 'Некорректный ISBN!' };
  }
  return errors;
};
