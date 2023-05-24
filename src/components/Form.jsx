import React, { useEffect, useState } from 'react';
import { addBook, getBook, updateBook } from './CRUD';

const currentYear = new Date().getFullYear();

const Form = ({ getData, bookId, setBookId }) => {
  const [errors, setErrors] = useState([]);
  const [response, setResponse] = useState('');
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
    if (id == 'name') {
      setBook({ ...book, name: value });
    }
    if (id == 'author') {
      setBook({ ...book, author: value });
    }
    if (id == 'year') {
      setBook({ ...book, year: +value });
    }
    if (id == 'rating') {
      setBook({ ...book, rating: +value });
    }
    if (id == 'ISBN') {
      setBook({ ...book, ISBN: value });
    }
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
      className='w-2/6 shadow-xl rounded px-8 pt-6 pb-8 mb-4'
    >
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='name'>
          Название книги
        </label>
        <input
          value={book.name}
          id='name'
          type='text'
          placeholder='Название'
          maxLength={100}
          onChange={handleChange}
          className='border rounded w-full py-2 px-3 focus:outline-none'
        />
        <span className='text-sm text-red-600'>{errors?.name}</span>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='author'>
          Автор
        </label>
        <input
          value={book.author}
          id='author'
          type='text'
          placeholder='Введите авторов через запятую'
          onChange={handleChange}
          className='border rounded w-full py-2 px-3 focus:outline-none'
        />
        <span className='text-sm text-red-600'>{errors?.author}</span>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='year'>
          Год издания
        </label>
        <input
          value={book.year}
          id='year'
          type='number'
          min={1800}
          max={currentYear}
          placeholder='Год'
          onChange={handleChange}
          className='border rounded w-full py-2 px-3 focus:outline-none'
        />
        <span className='text-sm text-red-600'>{errors?.year}</span>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='rating'>
          Рейтинг книги
        </label>
        <input
          value={book.rating}
          id='rating'
          type='number'
          min={0}
          max={10}
          onChange={handleChange}
          className='border rounded w-full py-2 px-3 focus:outline-none'
        />
        <span className='text-sm text-red-600'>{errors?.rating}</span>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='ISBN'>
          ISBN
        </label>
        <input
          value={book.ISBN}
          id='ISBN'
          type='text'
          placeholder='ISBN'
          onChange={handleChange}
          className='border rounded w-full py-2 px-3 focus:outline-none'
        />
        <span className='text-sm text-red-600'>{errors?.ISBN}</span>
      </div>
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
      {/* {errors.map((item, i) => (
        <div key={i}>{item}</div>
      ))} */}
    </form>
  );
};

export default Form;
