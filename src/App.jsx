import React, { useEffect, useState } from 'react';
import Form from '../src/components/Form';
import Books from '../src/components/Books.jsx';
import { getBooks } from '../src/firebase/CRUD';
import { findGoodBook } from './utils/goodBook';
import GoodBook from '../src/components/GoodBook';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Response from '../src/components/Response';
import Navigation from './components/Navigation';

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState('');
  const [goodBook, setGoodBook] = useState({});
  const [response, setResponse] = useState('');

  useEffect(() => {
    setGoodBook(findGoodBook(books));
  }, [books]);

  useEffect(() => getData(), []);

  const getData = () => {
    getBooks().then((data) => setBooks(data));
  };

  return (
    <div className='bg-gradient-to-b from-amber-100 via-orange-200 to-orange-300 text-dark-brown'>
      <Header />
      <Navigation />      
      <main className='container mx-auto'>
        <section className='flex justify-between'>
          <Form
            getData={getData}
            bookId={bookId}
            setBookId={setBookId}
            setResponse={setResponse}
          />
          {goodBook && Object.entries(goodBook).length > 0 && (
            <GoodBook goodBook={goodBook} />
          )}
        </section>
        <Books
          books={books}
          getData={getData}
          setBookId={setBookId}
          setResponse={setResponse}
        />
      </main>
      <Footer />
      <Response response={response} setResponse={setResponse} />
    </div>
  );
};

export default App;
