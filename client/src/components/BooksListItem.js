import './BooksListItem.css';
import {Link} from 'react-router-dom';

export default function BooksListItem({ title, author, id}) {
  return (
    <li>
      <Link to={`/books/${id}`}>
        <span className="title">{title}</span> by <span className="author">{author}</span>
      </Link>
    </li>
  )
}