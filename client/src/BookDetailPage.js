import { useEffect, useState } from "react"
import BooksHero from "./components/BooksHero"

export default function BookDetailPage () {
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchBookbyId = async () => {
      const url = 'http://localhost:5050/books/:id'
      const response = await fetch(url, {
        method: 'GET'
      })
      console.log(response)
      const book = await response.json()
      setBook(book)
    }

    fetchBookbyId()
  },[])

  return (
    <div>
      <BooksHero title="AutieReads" />
      {book ? 
      <div>
        <h2>{book.title} by {book.author}</h2> 
        <p>{book.description}</p>
      </div> 
      : null}
    </div>
  )
}