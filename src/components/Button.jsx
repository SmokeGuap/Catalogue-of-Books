const Button = ({ func, data, text }) => {
  return (
    <button
      className='w-full bg-dark-brown hover:bg-brown active:bg-light-brown text-white font-bold py-2 px-4 rounded transition duration-300 hover:scale-105'
      onClick={() => func(data)}
    >
      {text}
    </button>
  );
};
export default Button;
