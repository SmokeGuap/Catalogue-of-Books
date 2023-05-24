import React from 'react';
import Button from './Button';

const Book = ({ handleDelete, handleUpdate, typeSort, type, items }) => {
  return (
    <div className=''>
      <h3 className='text-3xl font-bold w-fit mx-auto mt-10'>
        {type == '0' && typeSort == 'year' ? 'Книги без указания года' : type}
      </h3>
      <hr className='w-48 h-1 mx-auto mt-4 mb-10 bg-dark-brown border-0 rounded' />
      <div className='flex flex-wrap gap-3'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-between p-2 shadow-2xl rounded-2xl w-1/6'
          >
            <ul>
              <div className='flex justify-between'>
                <li className='text-lg font-bold w-5/6 leading-6'>
                  {item.name}
                </li>
                <span className='inline-flex items-center justify-center h-10 w-10 bg-yellow rounded-full font-bold'>
                  <li className='text-xl'>{item.rating}</li>
                </span>
              </div>
              <li className='font-semibold'>{item.author.join(', ')}</li>
            </ul>
            <div className='flex flex-col gap-3 mt-10'>
              <span className=''>
                <div className='uppercase text-sm text-brown font-bold'>
                  Год издания
                </div>
                {item.year ? item.year : 'Год не указан'}
              </span>
              <span className=''>
                <div className='uppercase text-sm text-brown font-bold'>
                  ISBN
                </div>
                {item.ISBN ? item.ISBN : 'ISBN не указан'}
              </span>
              <a href='#header'>
                <Button func={handleUpdate} data={item.id} text='Обновить' />
              </a>
              <Button func={handleDelete} data={item.id} text='Удалить' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Book;
