import './BookListItem.css';
import React from "react";
import BookDetailsCard from "./BookDetailsCard";

export default function BooksListItem({ title, author, description, isSelected, selectBook, id}) {
  return (
    <li>
      <button className={isSelected ? "selected" : "not-selected"} 
              onClick={() => selectBook(id)}>{title}, {author}
      </button>

      {isSelected && (<BookDetailsCard description={description}/>)}
    </li>
  )
}