import "./BookDetailPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BooksHero from "./components/BooksHero";
import CommentsPage from "./CommentsPage";

export default function BookDetailPage() {
	const [books, setBooks] = useState([]);
	const [book, setBook] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchBooks = async () => {
			const url = "http://localhost:5000/books";
			const response = await fetch(url, {
				method: "GET"
			});
			console.log(response);
			const books = await response.json();
			const book = books.find(book => book.id === parseInt(id));
			setBook(book);
			setBooks(books);
		};

		fetchBooks();
	}, []);
	return (
		<>
			<div>
				<BooksHero title="AutieReads" />
			</div>
			<div>
				<CommentsPage book={book} /> {/* sending info to the commentsPage */}
			</div>
			{book ? (
				<div className="bookDetail-wrapper">
					<h3 className="text">
						{book.title} by {book.author}
					</h3>
					<p className="description">{book.description}</p>
					<img className="image" src={book.image} alt=""></img>
				</div>
			) : null}
		</>
	);
}
