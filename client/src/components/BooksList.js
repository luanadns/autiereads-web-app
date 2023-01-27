import React from "react";
import BooksListItem from "./BooksListItem";

export default function BooksList({ books }) {
  return (
    <ul>
      {books.map((book, index) => {
        return (
          <BooksListItem 
            key={index}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        )
      })}
    </ul>
  )
}


