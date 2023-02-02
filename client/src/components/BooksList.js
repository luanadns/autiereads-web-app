import React from "react";
import "./BooksList.css";
import BooksListItem from "./BooksListItem";

export default function BooksList({ books, clickHandler }) {
  return (
    <ul>
      {books.map((book, index) => {
        return (
          <BooksListItem 
            key={index}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            isSelected={book.isSelected}
            selectBook={clickHandler}
          />
        )
      })}
    </ul>
  )
}


