var mongoose = require('mongoose');
const Article = mongoose.model('Article',{
    title: String,
    image: String,
    author: String,
    date: Date,
    content: String,
    abstract: String,
    genre: String
});
module.exports = Article;
