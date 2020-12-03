var express = require('express');
var router = express.Router();

//require controller module;
var user_controller = require('../controllers/userController')

/* GET users listing. */
router.get('/', user_controller.log_in_get);

router.post('/',user_controller.log_in_post);

router.get('/logout', user_controller.log_out_get);

module.exports = router;
