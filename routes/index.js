var express = require('express');
var router = express.Router();
var Article = require('../model/article');
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    var file = fs.readFileSync(path.join(__dirname,'..','/public/article.json'));
    var articles = JSON.parse(file);
    // Article.find({}).exec(function(err,articles){
      // console.log(err);
      res.render('index',{
        articles:articles,
        pageTitle: "TD Blog"});
    // });
});

module.exports = router;
