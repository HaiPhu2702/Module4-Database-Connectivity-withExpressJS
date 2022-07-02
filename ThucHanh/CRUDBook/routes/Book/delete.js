const express = require('express');
const router = express.Router();
const controllerBook=require('../../controller/BookManager')

/* GET users listing. */
router.get('/book/delete/:id', function(req, res, next) {
    console.log(typeof +(req.params.id))

    controllerBook.deleteBookById(req,res,req.params.id);
});

module.exports = router;
