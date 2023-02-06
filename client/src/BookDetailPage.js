//import {useState, useEffect} from "react"
// import { useParams } from "react-router-dom"
import BooksHero from "./components/BooksHero"

export default function BookDetailPage() {
  //const [books, setBooks] = useState([])
  //const [book, setBook] = useState(null)
  // const {id} = useParams()

  /*useEffect(() => {
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
*/

  /*useEffect(() => {
    const fetchBookById = (id) => {
      return books.find(book => book.id === parseInt(id))
    };
    const book = fetchBookById(id)
    setBook(book)
  }, [id])
*/

  return (
    <div>
      <BooksHero title="AutieReads"/>
    </div>
    // {book? ? <h2>{book.title} by {book.author}</p> 
    //<p>{book.description}<p>
    //: null}}
  )
}