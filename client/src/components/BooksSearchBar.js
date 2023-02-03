import './BooksSearchBar.css';

export default function BooksSearchBar({ books }) {
    /* const [searchBooks, setSearchBooks] = useState("");

       const handleChange = (e) => {
        e.preventDefault();
        setSearchBooks(e.target.value);
      };
      
      if (searchBooks.length > 0) {
          books.filter((word) => {
          return books.include(word);
      });
      }
*/
    return (
        <form>
            <input
                type="search"
                placeholder="Enter a search keyword..."
                //onChange={handleChange}
                //value={searchBooks}
            />
            <button type="submit">Search</button>
        </form>
    )
}