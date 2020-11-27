var express = require('express');
var router = express.Router();

//require controller module;
var user_controller = require('../controllers/userController')

/* GET users listing. */
router.get('/', user_controller.log_in_get);

router.post('/',user_controller.log_in_post);

// router.get('/', function(req, res, next) {
//   res.send('respond with a user resource');
// });

module.exports = router;
