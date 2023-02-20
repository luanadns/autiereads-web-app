import "./BookDetailPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BooksHero from "./components/BooksHero";
import CommentsPage from "./CommentsPage";

export default function BookDetailPage() {
	const [book, setBook] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchBooks = async () => {
			const url = "http://" + window.location.hostname + ":5000/books";
			const response = await fetch(url, {
				method: "GET"
			});
			console.log(response);
			const books = await response.json();
			const book = books.find(book => book.id === parseInt(id));
			setBook(book);
		};

		fetchBooks();
	}, [id]);

	return (
		<>
			<div>
				<BooksHero title="AutieReads" />
			</div>

			{book ? (
				<>
					<div className="bookDetail-wrapper">
						<img className="image" src={book.image} alt=""></img>
						<div className="book-detail">
							<h3 className="text">
								{book.title} by {book.author}
							</h3>
							<p className="description">{book.description}</p>
						</div>
					</div>

					<div className="comment-form">
						<CommentsPage book={book} /> {/* sending info to the commentsPage */}
					</div>
				</>
			) : null}
		</>
	);
}
