const express = require('express');
const router = express.Router();
const controllerBook=require('../../controller/BookManager')
const {parse} = require("nodemon/lib/cli");

/* GET home page. */
router.get('/book', function(req, res, next) {

    const page=parseInt(req.query.page)||1;
    const perPage = 3;
    controllerBook.showListPage(res,page, perPage);
});


module.exports = router;