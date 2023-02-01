import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BooksListPage from "./BooksListPage.js";
import BooksList from './components/BooksList';
import BooksListItem from './components/BooksListItem';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/books/:id" element={<BooksListItem />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
