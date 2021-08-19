const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
var app = express()
const bodyParser = require('body-parser');
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data
app.use(bodyParser.json());
var UserController = require('./Controller/UserController.js');
var ChatController = require('./Controller/ChatController.js');
var TweetController = require('./Controller/TweetController.js');
const db_URL = "mongodb://localhost/Speer"

mongoose.connect(db_URL, {useUnifiedTopology:true, useNewUrlParser:true}, function(){
    console.log("Successfully connected to the database");
});

const store = new MongoDBSession({
    uri:db_URL,
    collection : "mySessions",

})
app.use(
    session({
        secret:"gurvinder singh",
        resave: false,
        saveUnintiaized:false,
        store:store,
    })
);  

const isAuth = (req,res,next) =>
{
    if(req.session.isAuth)
    {
        next()
    }
    else
    {
        res.json({msg:"You have to login"});
    }
}
app.get('/index', (req,res)=>{
   
    res.json({message:'Index '});
});
app.post('/login', UserController.Login);
app.post('/logout',(req,res)=>
{
    req.session.destroy((err)=>
    {
        if(err) throw err;
        res.json("Logging out")
    });
})
app.post('/newuser', UserController.CreateAccount);
app.post('/dashboard',isAuth,function(req,res)
{
    res.json("Dash Board");
})
app.post('/dashboard/chat',ChatController.SendMessage);
app.post('/create', TweetController.Tweet_create);
app.put('/:id/update', TweetController.Tweet_update);
app.delete('/:id/delete', TweetController.Tweet_delete);
app.listen('3000');
module.exports = app;