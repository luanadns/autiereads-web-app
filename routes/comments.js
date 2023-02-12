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

module.exports = router;
