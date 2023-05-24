const Button = ({ func, data, text }) => {
  return (
    <button
      className='w-full bg-dark-brown hover:bg-brown text-white font-bold py-2 px-4 rounded '
      onClick={() => func(data)}
    >
      {text}
    </button>
  );
};
export default Button;
