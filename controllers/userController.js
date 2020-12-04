var User = require('../model/user');


//Display log in form on GET
exports.log_in_get = function(req,res){
    console.log('Get Login');
    res.render('log_in');
};

exports.log_in_post = function(req,res){
    // res.send('NOT IMPLEMENTED: Log in POST');
    var user = req.body.username;
    var pwd = req.body.password;
    // res.send(req.body);
    User.findOne({username:user, password: pwd},function(err,item){
        if(err)console.log('Error:'+err);
        // console.log('User:'+item);
        if(item){
            req.session.username = item.username;
            req.session.userLoggedIn = true;
            res.redirect('/article/list');
        }
        else{
            res.render('log_in', {error: 'Please try again.'});
        }
    });

};

exports.log_out_get = function(req,res){
    req.session.destroy();
    res.redirect('/');
};