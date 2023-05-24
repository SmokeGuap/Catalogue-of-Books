import React, { useEffect, useState } from 'react';
import Form from './Form.jsx';
import Books from './Books.jsx';
import { getBooks } from './CRUD';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const App = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState('');

  useEffect(() => getData(), []);

  const getData = () => {
    getBooks().then((data) => setBooks(data));
  };

  return (
    <div className='bg-gradient-to-b from-amber-100 via-orange-300 to-orange-400 text-dark-brown'>
      <Header />
      <main className='container mx-auto mt-10'>
        <Form getData={getData} bookId={bookId} setBookId={setBookId} />
        <Books books={books} getData={getData} setBookId={setBookId} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
