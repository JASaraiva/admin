var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Setting Configs
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

module.exports = app;