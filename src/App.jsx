import Header from './Header.jsx';
import Footer from './Footer.jsx';
const App = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => getData(), []);

  const getData = () => {
    getBooks().then((data) => setBooks(data));
  };
  return (
    <div className='bg-gradient-to-b from-amber-100 via-orange-300 to-orange-400 text-dark-brown'>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
