const mongoose = require('mongoose');
const User = require('./user');

var mongoDB = 'mongodb+srv://root:8020@cluster0.ae6fx.mongodb.net/blog?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

db.once('open',(err)=>{console.log('db connect')});
// db.once('close',console.log('db closed'));

// user = new User({
//     username: "abc",
//     password: "123"
// });

// user.save((err)=>{
// if(err){console.log(err);}
// console.log('saved');
// });


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;