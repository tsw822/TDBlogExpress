var express = require('express');
var router = express.Router();

// Require controller modules.
var article_controller = require('../controllers/articleController');

// GET request for creating a Article. NOTE This must come before routes that display Book (uses id).
router.get('/create', article_controller.article_create_get);

// POST request for creating Article.
router.post('/create', article_controller.article_create_post);

// GET request to delete Article.
router.get('/:id/delete', article_controller.article_delete_get);

// GET request to update Article.
router.get('/:id/update', article_controller.article_update_get);

// POST request to update Article.
router.post('/:id/update', article_controller.article_update_post);

// GET request for one Article.
router.get('/:id/detail', article_controller.article_detail);

// GET request for list of all Article items.
router.get('/list', article_controller.article_list_get);

// GET request for update header.
router.get('/header_update', article_controller.header_update_get);

// POST request for update header.
router.post('/header_update', article_controller.header_update_post);

module.exports = router;