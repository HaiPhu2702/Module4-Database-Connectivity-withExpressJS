const express = require('express');
const router = express.Router();
const controllerBook = require('../../controller/BookManager');

/* GET users listing. */
router.get('/book/create', function(req, res, next) {
  res.render('./Book/create.ejs')
});

router.post('/book/create', function(req, res, next) {
  controllerBook.addBook(req, res);
});

module.exports = router;
