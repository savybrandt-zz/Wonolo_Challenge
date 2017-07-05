var webpackConfig = require('../webpack.config');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var compiler = webpack(webpackConfig);
var app = express();


app.use(require("webpack-hot-middleware")(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(express.static('public'));

////////////////////////////////////////////////////////////////////////////////////////
//                                  API Requests
///////////////////////////////////////////////////////////////////////////////////////

var wonolo = "https://api.wonolo.com/api_v2";
var token = require('../wonolo.config.js');
token = "apJxghvUyTxg4QHGLMQQ";

app.get('/jobs/:page', function(req, res) {
  request(wonolo + '/job_requests?token=' + token + '&per=21&page=' + req.params.page + '&state=approved', 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

app.get('/job/:id', function(req, res) {
  request(wonolo + '/job_requests/' + req.params.id + '?token=' + token, 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

app.get('/user/:id', function(req, res) {
  request(wonolo + '/users/' + req.params.id + '?token=' + token + '&id=' + req.params.id, 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

app.get('/users/:email', function(req, res) {
  request(wonolo + '/users?token=' + token + '&email=' + req.params.email, 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

app.get('/badges/:id', function(req, res) {
  request(wonolo + '/badges/' + req.params.id + '?token=' + token, 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

module.exports = app;
