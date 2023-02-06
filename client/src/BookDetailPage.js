import React from "react"
import BooksHero from "./components/BooksHero"

export default function BookDetailPage(props) {
  console.log(props)
  return (
    <div>
      <BooksHero title="AutieReads" />
      <p>{props.description}</p>
    </div>
  )
}