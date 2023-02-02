import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BooksListPage from "./BooksListPage.js";
import BookDetailPage from './BookDetailPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path="/books/:id" element={<BookDetailPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
