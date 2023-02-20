import { useState, useEffect } from "react";
import "./CommentsPage.css";
//to make the comment box we are gonna take the info from the front end
//create a new table for the comments
//use foreign key to connect with the books table
//create new end points -get comments by book id -post if I do the form to add more comments
//grab the info with fetch for the front end **give a try with axios
//comments page is a child of the bookDetailPage
//bookDetailPage need to give us some props, send info (book_id)

export default function Comments(props) {
	const [comments, setComments] = useState([]);

	const id = props.book.id;

	const fetchComments = async bookId => {
		const url = `http://${window.location.hostname}:5000/comments/${bookId}`;
		const response = await fetch(url, {
			method: "GET"
		});
		const comments = await response.json();
		setComments(comments);
	};

	useEffect(() => {
		fetchComments(id);
	}, [id]);

	const handleSubmit = async event => {
		event.preventDefault();

		const form = event.target;
		const userName = form.name.value;
		const commentText = form.comment.value;

		try {
			await fetch("/comments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: userName,
					comment: commentText,
					id
				})
			});

			fetchComments(id);
		} catch (error) {
			console.error(error);
		} finally {
			form.reset();
		}
	};

	return (
		<>
			<div className="card">
				{comments.map((comment, id) => {
					return (
						<div key={id} className="card-user-comment">
							<p>{`"${comment.commenText}"`}</p>
							<h2> {comment.userName} </h2>
						</div>
					);
				})}
			</div>

			<div className="comments-container">
				<div>
					<h1> Make a comment: </h1>
				</div>
				<form onSubmit={handleSubmit} className="form">
					<div className="input-container">
						<div>
							<label className="name-label">Name: </label>
							<input name="name" placeholder="Your name" className="input" />
						</div>
						<div>
							<label className="comment-label">Comment: </label>
							<textarea name="comment" placeholder="Comment here" className="textarea" />
						</div>
					</div>
					<div className="button">
						<button type="submit" className="btn-submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
