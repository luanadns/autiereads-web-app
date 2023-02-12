import "./BookDetailPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BooksHero from "./components/BooksHero";

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
	//to make the comment box we are gonna take the info from the front end
	//create a new table for the comments
	//use foreign key to connect with the books table
	//create new end points -get comments by book id -post if I do the form to add more comments
	//grab the info with fetch for the front end **give a try with axios
	return (
		<>
			<div>
				<BooksHero title="AutieReads" />
			</div>
			{book ? (
				<div className="bookDetail-wrapper">
					<h3>
						{book.title} by {book.author}
					</h3>
					<p>{book.description}</p>
					<img src={book.image}></img>
				</div>
			) : null}
		</>
	);
}
