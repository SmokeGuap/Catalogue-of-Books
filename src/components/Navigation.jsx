import { animateScroll as scroll } from 'react-scroll';
import arrow from '../assets/arrow.svg';

const Navigation = () => {
  return (
    <div className='fixed top-0 right-0'>
      <nav className='flex flex-col justify-center items-end h-screen mr-5 gap-y-10'>
        <a onClick={() => scroll.scrollToTop()} className='text-3xl font-bold'>
          <img className='w-12 rotate-180' src={arrow} />
        </a>
        <a
          onClick={() => scroll.scrollToBottom()}
          className='text-3xl font-bold'
        >
          <img className='w-12' src={arrow} />
        </a>
      </nav>
    </div>
  );
};
export default Navigation;
