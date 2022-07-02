const express = require('express');
const router = express.Router();
const controllerBook=require('../../controller/BookManager')

/* GET home page. */
router.get('', function(req, res, next) {
  controllerBook.showListBook(req, res);
});


module.exports = router;
