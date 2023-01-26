import React from "react";
import BooksListItems from "./BooksListItems";

export default function BooksList({ books }) {
  return (
    <ul>
      {books.map((book, index) => {
        return (
        <BooksListItems 
         key={index}
         title={book.title}
         author={book.author}
         description={book.description}
         />)
        })}
    </ul>
  )
}


