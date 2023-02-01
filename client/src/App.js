import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BooksListPage from "./BooksListPage.js";
import BooksList from './components/BooksList';
import BookDetailsCard from './components/BookDetailsCard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/books/:id" element={<BookDetailsCard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
