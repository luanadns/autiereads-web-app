import React from "react"

 export default function BooksListItems({ title, author }) {
  return (
    <li><span>{title}, {author}</span></li>
    )
}