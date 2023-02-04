import './BooksSearchBar.css';

export default function BooksSearchBar({ handleChange }) {
    return (
    <input
     type="search"
     placeholder="Enter a search keyword..."
     onChange={handleChange}
    />
    )
}