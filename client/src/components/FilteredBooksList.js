import BooksListItem from "./BooksListItem";

export default function FilteredBooksList({ filteredBooks }) {
  return (
    <ul>
      {filteredBooks.map((book, index) => {
        return (
          <BooksListItem 
            key={index}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        )
      })}
    </ul>
  ) 
}
