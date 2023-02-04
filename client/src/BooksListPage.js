import {useEffect, useState} from 'react'
import BooksHero from './components/BooksHero'
import BooksSearchBar from './components/BooksSearchBar'
import BooksList from './components/BooksList'
import FilteredBooksList from './components/FilteredBooksList'

const BooksListPage = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState(books)

  useEffect(() => {
    const fetchBooks = async () => {
      const url = 'http://localhost:5050/books'
      const response = await fetch(url, {
        method: 'GET'
      })
      console.log(response)
      const books = await response.json()
      setBooks(books)
    }

    fetchBooks()
  }, [])

  const handleChange = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of books list
    let updatedBooksList = [...books];
    // Include all elements which includes the search query
    updatedBooksList = updatedBooksList.filter((input) => {
      return input.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredBooks(updatedBooksList);
  };

  return (
  <div>
    <BooksHero title="AutieReads">
    <BooksSearchBar books={books} onChange={handleChange}/>
    </BooksHero>
    {filteredBooks ? 
    <FilteredBooksList filteredBooks={filteredBooks}/> 
    : 
    <BooksList books={books}/>}
  </div>
  )
}

export default BooksListPage