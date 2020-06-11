const express = require('express')
const PORT = process.env.PORT || 5000
const methodOverride = require('method-override')
var app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
var session = require("express-session")
var cookieParser = require('cookie-parser');
const flash = require('express-flash')
const mainRouter = require('./router/mainRouter')
const mongoose = require('./Models/Mongoose')

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('secret'));
app.use(session({
	secret:'happy dog',
	resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000000 }
}));
app.use(flash());

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
app.use('/', mainRouter)