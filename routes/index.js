var express = require('express');
var router = express.Router();
var Article = require('../model/article')

/* GET home page. */
router.get('/', function(req, res, next) {
    Article.find({}).exec(function(err,articles){
      // console.log(err);
      res.render('index',{
        articles:articles,
        pageTitle: "TD Blog"});
    });
});

module.exports = router;
