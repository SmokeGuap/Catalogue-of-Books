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
                response.startsWith('Не')
                  ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 m-4 text-white font-bold text-sm py-2 px-4 rounded'
                  : 'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 m-4 text-white font-bold text-sm py-2 px-4 rounded'
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
