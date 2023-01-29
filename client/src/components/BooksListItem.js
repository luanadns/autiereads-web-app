import React from "react";
import BookCard from "./BookCard";

export default function BooksListItem({ title, author, isSelected, selectBook, id}) {
  return (
    <li><button className={isSelected ? "selected" : "not-selected"} onClick={() => selectBook(id)}>{title}, {author}</button></li>
  )
}