import React from 'react';

const GoodBook = ({ goodBook }) => {
  return (
    <div className='w-2/6'>
      <h2 className='font-bold text-4xl'>Лучшая книга:</h2>
      <ul className='p-2 shadow-xl rounded mt-5'>
        <div className='flex justify-between'>
          <li className='text-2xl font-bold w-5/6'>{goodBook.name}</li>
          <span className='inline-flex items-center justify-center h-10 w-10 bg-yellow rounded-full font-bold'>
            <li className='text-xl'>{goodBook.rating}</li>
          </span>
        </div>
        <li>{goodBook.author.join(', ')}</li>
        <li>{goodBook.year ? goodBook.year : 'Книга без указания года'}</li>
        <li>{goodBook.ISBN ? goodBook.ISBN : 'ISBN не указан'}</li>
      </ul>
    </div>
  );
};
export default GoodBook;
