var express = require('express');
var db = require('../model/helper')

var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const response = await db('SELECT * FROM BOOKS;')
    const books = response.data
    res.send(books);
  } catch(error) {
    res.status(500).send()
  }
});

module.exports = router;
