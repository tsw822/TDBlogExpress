var User = require('../model/user');

//Display log in form on GET
exports.log_in_get = function(req,res){
    console.log('works');
    res.render('log_in');
};

exports.log_in_post = function(req,res){
    // res.send('NOT IMPLEMENTED: Log in POST');
    var user = req.body.username;
    var pwd = req.body.password;
    User.findOne({username:user, password: pwd}).exec(function(err,item){
        console.log('Error:'+err);
        console.log('User:'+item);
        if(item){
            res.send("Login Success");
        }
        else{
            res.render('log_in', {error: 'Please try again.'});
        }
    });

};

exports.log_out_get = function(req,res){
    res.send('NOT IMPLEMENTED: Log out GET');
};