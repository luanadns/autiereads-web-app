import React from "react";

export default function BooksList({ books }) {
  return (
    <ul>
    {books.map((book, index) => (
    <li key={index}>
      <span>{book.title}, {book.author}</span>
    </li>))}
    </ul>)
}


