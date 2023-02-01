import React from "react";

export default function BooksListItem({ title, author, description, isSelected, selectBook, id}) {
  return (
    <li>
      <button className={isSelected ? "selected" : "not-selected"} 
              onClick={() => selectBook(id)}>{title}, {author}
      </button>

      {isSelected && (
        <div ClassName="description">
        {description}
        </div>
      )}
    </li>
  )
}