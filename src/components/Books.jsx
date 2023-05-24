import React, { useState } from 'react';
import { deleteBook } from '../firebase/CRUD';
import { sortFunc } from '../utils/sortFunc';
import BooksByType from './BooksByType';
import TypeSortButtons from './TypeSortButtons';
import { animateScroll as scroll } from 'react-scroll';
import Loading from './Loading';

const Books = ({ books, getData, setBookId, setResponse }) => {
  const [typeSort, setTypeSort] = useState('year');
  const handleDelete = async (id) => {
    const res = await deleteBook(id);
    setResponse(res);
    getData();
  };
  const handleUpdate = async (id) => {
    scroll.scrollToTop();
    setBookId(id);
  };

  return (
    <div>
      <TypeSortButtons setTypeSort={setTypeSort} />
      {!books.length && <Loading />}
      {sortFunc(typeSort, books).map(([type, items]) => (
        <BooksByType
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
