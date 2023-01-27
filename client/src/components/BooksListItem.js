import React from "react"

export default function BooksListItem({ title, author }) {
  return (
    <li><span>{title}, {author}</span></li>
  )
}