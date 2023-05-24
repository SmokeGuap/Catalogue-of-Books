import React, { useEffect, useState } from 'react';
import Form from './Form.jsx';
import Books from './Books.jsx';
import { getBooks } from './CRUD';
import { findGoodBook } from './utils/goodBook';
import GoodBook from './GoodBook';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const App = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState('');
  const [goodBook, setGoodBook] = useState({});

  useEffect(() => {
    setGoodBook(findGoodBook(books));
  }, [books]);

  useEffect(() => getData(), []);

  const getData = () => {
    getBooks().then((data) => setBooks(data));
  };

  return (
    <div className='bg-gradient-to-b from-amber-100 via-orange-300 to-orange-400 text-dark-brown'>
      <Header />
      <main className='container mx-auto'>
        <section className='flex justify-between h-[calc(100vh-74px)]'>
          <Form getData={getData} bookId={bookId} setBookId={setBookId} />
          {goodBook && Object.entries(goodBook).length > 0 && (
            <GoodBook goodBook={goodBook} />
          )}
        </section>
        <Books books={books} getData={getData} setBookId={setBookId} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
