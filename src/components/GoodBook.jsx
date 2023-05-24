const GoodBook = ({ goodBook }) => {
  console.log(goodBook);
  return (
      <div className='md:w-2/6 '>
        <h2 className='font-bold text-4xl mb-5'>Рекомендуемая книга:</h2>
        <div className='flex flex-col bg-emerald-300 justify-between p-2 shadow-2xl rounded-2xl'>
          <ul>
            <div className='flex justify-between'>
              <li className='text-lg font-bold w-5/6 leading-6'>
                {goodBook.name}
              </li>
              <span className='inline-flex items-center justify-center h-10 w-10 bg-yellow rounded-full font-bold'>
                <li className='text-xl'>{goodBook.rating}</li>
              </span>
            </div>
            <li className='font-semibold'>{goodBook.author.join(', ')}</li>
          </ul>
          <div className='flex flex-col gap-3 mt-10'>
            <span className=''>
              <div className='uppercase text-sm text-brown font-bold'>
                Год издания
              </div>
              {goodBook.year ? goodBook.year : 'Год не указан'}
            </span>
            <span className=''>
              <div className='uppercase text-sm text-brown font-bold'>ISBN</div>
              {goodBook.ISBN ? goodBook.ISBN : 'ISBN не указан'}
            </span>
          </div>
        </div>
      </div>
  );
};
export default GoodBook;
