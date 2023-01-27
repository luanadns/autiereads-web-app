import {useEffect, useState} from 'react'
import BookList from './components/BooksList'

const BooksListPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const url = 'http://localhost:5050/books'
      const response = await fetch(url, {
        method: 'GET'
      })
      const books = await response.json()

      setBooks(books)
    }

    fetchBooks()
  }, [])
  
  return <div><BookList books={books} /></div>
}

export default BooksListPage