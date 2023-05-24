import book from '../assets/book.svg';

const Header = () => {
  return (
    <header className='flex justify-center items-center h-24'>
      <img src={book} className='mr-3 h-12' alt='GitHub' />
      <h1 className='text-4xl font-bold'>Каталог Книг</h1>
    </header>
  );
};
export default Header;
