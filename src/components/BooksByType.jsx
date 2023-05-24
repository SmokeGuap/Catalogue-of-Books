import React from 'react';
import Book from './Book';

const BooksByType = ({ handleDelete, handleUpdate, typeSort, type, items }) => {
  return (
    <div className=''>
      <h3 className='text-3xl font-bold w-fit mx-auto mt-10'>
        {type == '0' && typeSort == 'year' ? 'Книги без указания года' : type}
      </h3>
      <hr className='w-48 h-1 mx-auto mt-4 mb-10 bg-dark-brown border-0 rounded' />
      <div className='flex flex-wrap gap-3'>
        {items.map((item, index) => (
          <Book
            key={index}
            item={item}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};
export default BooksByType;
