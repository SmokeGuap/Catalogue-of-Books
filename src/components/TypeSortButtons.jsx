import React from 'react';
import Button from './Button';

const TypeSortButtons = ({ setTypeSort }) => {
  return (
    <div className='mt-5 md:w-1/3 mx-auto flex flex-col md:flex-row justify-center gap-3'>
      <Button func={setTypeSort} data='year' text='Сортировать по году' />
      <Button func={setTypeSort} data='rating' text='Сортировать по рейтингу' />
      <Button func={setTypeSort} data='author' text='Сортировать по автору' />
    </div>
  );
};
export default TypeSortButtons;
