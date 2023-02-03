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
      setBooks(books)
    }

    fetchBooks()
  }, [])

  return (
  <div>
    <BooksHero title="AutieReads">
    <BooksSearchBar books={books}/>
    </BooksHero>
    <BooksList books={books}/>
  </div>
  )
}

export default BooksListPage