import Button from './Button';

const Book = ({ index, item, handleDelete, handleUpdate }) => {
  return (
    <div
      key={index}
      className='flex flex-col justify-between p-2 shadow-2xl rounded-2xl w-1/5'
    >
      <ul>
        <div className='flex justify-between'>
          <li className='text-lg font-bold w-5/6 leading-6'>{item.name}</li>
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
          <div className='uppercase text-sm text-brown font-bold'>ISBN</div>
          {item.ISBN ? item.ISBN : 'ISBN не указан'}
        </span>
        <Button func={handleUpdate} data={item.id} text='Обновить' />
        <Button func={handleDelete} data={item.id} text='Удалить' />
      </div>
    </div>
  );
};
export default Book;
