import './BooksSearchBar.css';

export default function BooksSearchBar({ onChange }) {
  return (
    <input
      type="search"
      placeholder="Enter a search keyword..."
      onChange={onChange}
    />
  )
}