import React, { useState } from 'react';
import { deleteBook } from './CRUD';
import { sortFunc } from './utils/sortFunc';
import Book from './Book';
import TypeSortButtons from './TypeSortButtons';

const Books = ({ books, getData, setBookId }) => {
  const [typeSort, setTypeSort] = useState('year');
  const [response, setResponse] = useState('');

  const handleDelete = async (id) => {
    const res = await deleteBook(id);
    setResponse(res);
    getData();
  };
  const handleUpdate = async (id) => {
    setBookId(id);
  };

  return (
    <div className='todo-content'>
      <TypeSortButtons setTypeSort={setTypeSort} />
      {sortFunc(typeSort, books).map(([type, items]) => (
        <Book
          key={type}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          typeSort={typeSort}
          type={type}
          items={items}
        />
      ))}
    </div>
  );
};

export default Books;
