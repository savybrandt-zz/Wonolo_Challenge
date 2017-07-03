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
console.log(token);

app.get('/jobs/:page', function(req, res) {
  request(wonolo + '/job_requests?token=' + token + '&per=21&page=' + req.params.page + '@state=draft', 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

app.get('/job/:id', function(req, res) {
  request(wonolo + '/job_requests?token=' + token + '&id=' + req.params.id, 
  	function (err, data) { 
  		err ? console.log(err) : res.send(data.body);
  	})
});

module.exports = app;
