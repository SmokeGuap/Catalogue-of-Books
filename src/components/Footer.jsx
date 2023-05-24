import github from './assets/github.svg';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center h-24'>
      <a href='https://github.com/SmokeGuap'>
        <img src={github} className='mr-3 h-12' alt='GitHub' />
      </a>
      <span>© All rights reserved</span>
    </footer>
  );
};
export default Footer;
