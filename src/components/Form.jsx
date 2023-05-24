import React, { useEffect, useState } from 'react';
import { addBook, getBook, updateBook } from '../firebase/CRUD';
import Input from './Input';

const currentYear = new Date().getFullYear();

const Form = ({ getData, bookId, setBookId, setResponse }) => {
  const [errors, setErrors] = useState([]);
  const [book, setBook] = useState({
    name: '',
    author: '',
    year: '',
    rating: 0,
    ISBN: '',
  });
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const {
      target: { id },
    } = event;
    id == 'name'
      ? setBook({ ...book, name: value })
      : id == 'author'
      ? setBook({ ...book, author: value })
      : id == 'year'
      ? setBook({ ...book, year: +value })
      : id == 'rating'
      ? setBook({ ...book, rating: +value })
      : setBook({ ...book, ISBN: value });
  };
  const handleAdd = async (book) => {
    const res = await addBook(book);
    if (typeof res === 'object') {
      setErrors(res);
    } else {
      setResponse(res);
      setErrors([]);
      getData();
    }
  };
  const handleUpdate = async (bookId, book) => {
    const res = await updateBook(bookId, book);
    if (Array.isArray(res)) {
      setErrors(res);
    } else {
      setResponse(res);
      setErrors([]);
      setBook({ name: '', author: '', year: '', rating: 0, ISBN: '' });
      setBookId('');
      getData();
    }
  };
  const handleEdit = async (id) => {
    const doc = await getBook(id);
    setBook({
      name: doc.data().name,
      author: doc.data().author,
      year: doc.data().year,
      rating: doc.data().rating,
      ISBN: doc.data().ISBN,
    });
  };
  useEffect(() => {
    if (bookId) {
      handleEdit(bookId);
    }
  }, [bookId]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        bookId ? handleUpdate(bookId, book) : handleAdd(book);
      }}
      className='w-2/6 h-max shadow-xl rounded px-8 pt-6 pb-8 mb-4'
    >
      <Input
        labelName='Название книги'
        value={book.name}
        inputId='name'
        type='text'
        placeholder='Название'
        error={errors.name}
        handleChange={handleChange}
      />
      <Input
        labelName='Автор'
        value={book.author}
        inputId='author'
        placeholder='Введите авторов через запятую'
        error={errors.author}
        handleChange={handleChange}
      />
      <Input
        labelName='Год издания'
        value={book.year}
        inputId='year'
        placeholder='Год'
        type='number'
        min={1800}
        max={currentYear}
        error={errors.year}
        handleChange={handleChange}
      />
      <Input
        labelName='Рейтинг книги'
        value={book.rating}
        inputId='rating'
        type='number'
        min={0}
        max={10}
        error={errors.rating}
        handleChange={handleChange}
      />
      <Input
        labelName='ISBN'
        value={book.ISBN}
        inputId='ISBN'
        placeholder='ISBN'
        error={errors.ISBN}
        handleChange={handleChange}
      />
      {bookId ? (
        <button
          type='submit'
          className='w-full bg-dark-brown hover:bg-brown text-white font-bold py-2 px-4 rounded'
        >
          Обновить
        </button>
      ) : (
        <button
          type='submit'
          className='w-full bg-dark-brown hover:bg-brown text-white font-bold py-2 px-4 rounded'
        >
          Создать
        </button>
      )}
    </form>
  );
};

export default Form;
