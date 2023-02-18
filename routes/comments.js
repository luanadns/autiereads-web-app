var express = require("express");
var db = require("../model/helper");

var router = express.Router();

router.get("/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const result = await db(`SELECT * from comments WHERE book_id = ${id};`);
		const comments = result.data;

		res.send(comments);
	} catch (err) {
		res.status(500).send("Something went wrong");
	}
});
/*
router.post is gonna add a comment for a specific book (by id),
save the last comment added,
add a new one,
return all the comments 
userName, commenText, book_id
 */
router.post("/", async (req, res) => {
	console.log("Backend recived the request");
	const userName = req.body.name;
	const commenText = req.body.comment;
	const book_id = req.body.id;
	const addComment = await db(
		`INSERT INTO comments (userName, commenText, book_id) VALUES ("${userName}", "${commenText}", ${book_id});`
	);
	res.status(201).send();
});

router.get("/", async (req, res) => {
	console.log("Backend received the request to get comments");

	const book_id = req.query.id; // get book_id from query string
	const comments = await db(`SELECT * FROM comments WHERE book_id = ${book_id}`);

	res.status(200).json(comments);
});
module.exports = router;
