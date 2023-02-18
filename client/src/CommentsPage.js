import { useState, useEffect, Fragment } from "react";
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
	const [comment, setComment] = useState("");

	useEffect(() => {
		const fetchComments = async () => {
			const id = props.book.id;
			const url = `http://localhost:5000/comments/${id}`;
			const response = await fetch(url, {
				method: "GET"
			});
			console.log(response);
			const comments = await response.json();
			setComments(comments);
		};
		fetchComments();
	}, [props.book]);

	const handleSubmit = async event => {
		event.preventDefault();
		const form = event.target;
		const userName = form.name.value;
		const commentText = form.comment.value;
		const book_id = props.book.id;
		try {
			const response = await fetch("/comments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: userName,
					comment: commentText,
					id: book_id
				})
			});
			if (response.ok) {
				const newComment = await response.json();
				setComments([...comments, newComment]);
			} else {
				throw new Error(`Failed to add comment: ${response.status} ${response.statusText}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleCommentChange = event => {
		setComment(event.target.value);
	};

	return (
		<div className="comments-container">
			<div>
				<h1> Make a comment: </h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label className="name-label">Name: </label>
					<input name="name" placeholder="Your name" className="input" />
				</div>
				<div>
					<label className="comment-label">Comment: </label>
					<textarea
						name="comment"
						placeholder="Comment here"
						className="textarea"
						value={comment}
						onChange={handleCommentChange}
					/>
				</div>
				<button type="submit" className="btn-submit">
					Submit
				</button>
			</form>
			<div>
				{comments.map((comment, id) => {
					return (
						<Fragment key={id}>
							<h3> {comment.userName} </h3>
							<h3> {comment.commenText}</h3>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
