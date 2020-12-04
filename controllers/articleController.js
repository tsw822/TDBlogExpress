var Article = require('../model/article');
const fs = require('fs')
const path = require('path')
var {check, validationResult} = require('express-validator');
const { readyState } = require('../model/db');
const { json } = require('express');

// //Display all articles as list
exports.article_list_get = function(req, res) {
    if(req.session.userLoggedIn){
        Article.find({}).exec(function(err,articles){
            fs.writeFileSync(path.join(__dirname,'..','/public/article.json'),JSON.stringify(articles))
            res.render('article_list',{articles:articles});
        });
    }
    else{
        res.redirect('/users');
    }
    // res.send('NOT IMPLEMENTED: Article list');
};

// Display detail page for a specific article.
exports.article_detail = function(req, res) {
        var id = req.params.id;

        Article.findOne({_id:id}).exec(function(err,article){
            console.log(err);
            console.log(article);
            res.render('article_detail',article);
        });
    // res.send('NOT IMPLEMENTED: Article detail: ' + id);
};

// Display article create form on GET.
exports.article_create_get = function(req, res) {
    if(req.session.userLoggedIn){
        var pageData = {
            articlePageTitle:"Add new article",
            title:"",
            author: "",
            content: "",
            abstract: "",
            articleimagePath:""
        };
        res.render('article_form',pageData);
    }
    else{
        res.redirect('/users');
    }
    
    // res.send('NOT IMPLEMENTED: Article create GET');
};

// Handle article create on POST.
exports.article_create_post = function(req, res) {

    var title = req.body.title;
    var author = req.body.author;
    var articleContent = req.body.articleContent;
    var articleImageName = req.files.articleImage.name;
    var articleImage = req.files.articleImage;
    var articleImagePath = 'public/article_images/'+ articleImageName;
    var abstract = req.body.abstract;
    var date = req.body.date;
    var genre = req.body.genre;
    
    articleImage.mv(articleImagePath,function(err){
        if(err) console.log(err);
    });

    var pageData = {
        title: title,
        author: author,
        content: articleContent,
        image: articleImageName,
        abstract: abstract,
        date: date,
        genre: genre
    };

    var myArticle = new Article(pageData);
    myArticle.save().then(()=>console.log('New article created'));
    res.redirect('/article/list');
    // res.send('NOT IMPLEMENTED: Article create POST');
};

// Delete article on GET.
exports.article_delete_get = function(req, res) {
    if(req.session.userLoggedIn){
        var id = req.params.id;
        Article.findByIdAndDelete({_id: id}).exec(function(err, article){
            if(article){
                res.render('delete', {message: 'Article removed succefully!'});                
            }
            else{
                res.render('delete', {message: 'Article not found. Please try again.'});
            }
        });
        //res.send('NOT IMPLEMENTED: Article delete GET');
    }
    else{
        res.redirect('/users');
    }
    
};

// Display article update form on GET.
exports.article_update_get = function(req, res) {
    var id = req.params.id;

    if(req.session.userLoggedIn){
        Article.findOne({_id:id}).exec(function(err,article){
            if(err)console.log(err);
            var articleimagePath = "/article_images/"+article.image;
            var pageData = {
                articlePageTitle:"Edit article",
                title:article.title,
                author: article.author,
                content: article.content,
                abstract: article.abstract,
                image: article.image,
                articleimagePath: articleimagePath
            };
            console.log(article.image);
            res.render('article_form',pageData);
        });
    }
    else{
        res.redirect('/users');
    }
};

// Handle article update on POST.
exports.article_update_post = function(req, res) {

    var title = req.body.title;
    var author = req.body.author;
    var articleContent = req.body.articleContent;
    var abstract = req.body.abstract;
    var date = req.body.date;
    var genre = req.body.genre;
    
    console.log(req.files);
    var articleImageName = req.files.articleImage.name;
    var articleImage = req.files.articleImage;
    var articleImagePath = 'public/article_images/'+ articleImageName;
    articleImage.mv(articleImagePath,function(err){
        if(err) console.log(err);
    });

    var pageData = {
        title: title,
        author: author,
        content: articleContent,
        image: articleImageName,
        abstract: abstract,
        date: date,
        genre: genre
    };

    var query = {_id:req.params.id}

    Article.updateOne(query,pageData,(err,doc)=>{
        if(err)console.log(err);
        res.send('Article update POST');
    })
};
// Update header on GET.
exports.header_update_get = function(req, res) {
    if(req.session.userLoggedIn){
        res.render('header_edit');
    }
    else{
        res.redirect('/users');
    }
};

// Display header update form on POST.
exports.header_update_post = function(req, res) {
    var slagon = req.body.slagon;
    var headerImage = req.files.headerImage;
    var headerImagePath = 'public/images/logo.jpg';

    headerImage.mv(headerImagePath,function(err){
        if(err) console.log(err);
    });

    fs.writeFile(path.join(__dirname,"..","/public/header.txt"),slagon,(err)=>{
        if(err){console.log(err);}
    })
    res.send('header update successful');

};