var Article = require('../model/article');

// //Display all articles as list
exports.article_list_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Article list');
};

// Display detail page for a specific article.
exports.article_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Article detail: ' + req.params.id);
};

// Display article create form on GET.
exports.article_create_get = function(req, res) {
    var articlePageTitle = "Add new article";
    res.render('article_form',{articlePageTitle:articlePageTitle});
    // res.send('NOT IMPLEMENTED: Article create GET');
};

// Handle book create on POST.
exports.article_create_post = function(req, res) {
    res.send(req.body);
    // res.send('NOT IMPLEMENTED: Article create POST');
};

// Delete article on GET.
exports.article_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Article delete GET');
};

// Display article update form on GET.
exports.article_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Article update GET');
};

// Handle article update on POST.
exports.article_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Article update POST');
};
// Update header on GET.
exports.header_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Header update GET');
};

// Display header update form on GET.
exports.header_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Header update POST');
};