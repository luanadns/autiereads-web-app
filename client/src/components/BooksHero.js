import './BooksHero.css'

export default function BooksHero({title, children}) {
  return (
    <div className="BooksHero">
      <h1 className="BooksHero-title">{title}</h1>
      {children}
    </div>
  )
}