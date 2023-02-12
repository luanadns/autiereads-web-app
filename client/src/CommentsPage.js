import { useState, useEffect, Fragment } from "react";
//to make the comment box we are gonna take the info from the front end
//create a new table for the comments
//use foreign key to connect with the books table
//create new end points -get comments by book id -post if I do the form to add more comments
//grab the info with fetch for the front end **give a try with axios
//comments page is a child of the bookDetailPage
//bookDetailPage need to give us some props, send info (book_id)

export default function Comments(props) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const id = props.book.id; //taking the book from the bookDetailPage
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
	return (
		<div>
			<div>
				{comments.map((comment, id) => {
					<div key={id}>
						<h3> {comment.userName} </h3>;
					</div>;
				})}
			</div>
			<div>
				<h1> I work </h1>
			</div>
		</div>
	);
}
