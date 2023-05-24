import React from 'react';

const Book = ({ handleDelete, handleUpdate, typeSort, type, items }) => {
  return (
    <div className=''>
      <h3 className='text-3xl font-bold w-fit mx-auto mt-10'>
        {type == '0' && typeSort == 'year' ? 'Книги без указания года' : type}
      </h3>
      <hr className='w-48 h-1 mx-auto mt-4 mb-10 bg-dark-brown border-0 rounded' />
      <div className='flex gap-x-3'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-between p-2 shadow-xl rounded-2xl w-1/6'
          >
            <ul>
              <div className='flex justify-between'>
                <li className='text-xl font-bold w-5/6'>{item.name}</li>
                <span className='inline-flex items-center justify-center h-10 w-10 bg-yellow rounded-full font-bold'>
                  <li>{item.rating}</li>
                </span>
              </div>
              <li className=''>{item.author.join(', ')}</li>
              <li className=''>
                {item.year ? item.year : 'Книга без указания года'}
              </li>
              <li className=''>{item.ISBN ? item.ISBN : 'ISBN не указан'}</li>
            </ul>
            <div className='flex justify-between flex-col gap-3 mt-5'>
              <button
                className='bg-dark-brown hover:bg-brown text-white font-bold py-2 px-4 rounded'
                onClick={() => handleUpdate(item.id)}
              >
                Обновить
              </button>
              <button
                className='bg-dark-brown hover:bg-brown text-white font-bold py-2 px-4 rounded'
                onClick={() => handleDelete(item.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Book;
