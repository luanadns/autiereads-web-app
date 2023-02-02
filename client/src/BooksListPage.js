import './BooksListPage.css';
import {useEffect, useState} from 'react'
import BooksHero from './components/BooksHero'
import BooksSearchBar from './components/BooksSearchBar'
import BooksList from './components/BooksList'

const BooksListPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const url = 'http://localhost:5050/books'
      const response = await fetch(url, {
        method: 'GET'
      })
      console.log(response)
      const books = await response.json()

      setBooks(books.map((book) => {
        return {...book, isSelected: false}
      }))
    }

    fetchBooks()
  }, [])

  function selectBook(id) {
    setBooks(booksArray => booksArray.map((book) => {
      return book.id === id ? {...book, isSelected: true} 
      : book
    }))
  }

  return (
  <div>
    <BooksHero title="AutieReads">
      <BooksSearchBar books={books}/>
    </BooksHero>
    <BooksList books={books} clickHandler={selectBook}/>
  </div>
  )
}

export default BooksListPage