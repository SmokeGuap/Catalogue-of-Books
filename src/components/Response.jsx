const Response = ({ response, setResponse }) => {
  return (
    <>
      {response && (
        <div className='justify-center items-center flex fixed inset-0 z-50'>
          <div className='w-max shadow-xl flex flex-col bg-white rounded-xl'>
            <h3 className='px-4 pt-2 text-center text-xl font-bold'>
              {response}
            </h3>
            <button
              className={
                (response.startsWith('Не')
                  ? 'bg-red-500 hover:bg-emerald-600'
                  : 'bg-emerald-500 hover:bg-emerald-600',
                ' m-4 bg-emerald-500 text-white hover:bg-emerald-600 font-bold text-sm py-2 px-4 rounded')
              }
              onClick={() => setResponse('')}
            >
              ОК
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Response;
