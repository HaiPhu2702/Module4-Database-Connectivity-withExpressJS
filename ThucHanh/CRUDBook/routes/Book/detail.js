const express = require('express');
const router = express.Router();

const controllerBook=require('../../controller/BookManager')

/* GET users listing. */
router.get('/book/detail/:id', function(req, res, next) {
   controllerBook.showDetailBookByID(req, res,req.params.id)
});

module.exports = router;
