import React from 'react';
import Button from './Button';

const TypeSortButtons = ({ setTypeSort }) => {
  return (
    <div className='w-1/3 mx-auto flex justify-center gap-x-3'>
      <Button func={setTypeSort} data='year' text='Сортировать по году' />
      <Button func={setTypeSort} data='rating' text='Сортировать по рейтингу' />
      <Button func={setTypeSort} data='author' text='Сортировать по автору' />
    </div>
  );
};
export default TypeSortButtons;
