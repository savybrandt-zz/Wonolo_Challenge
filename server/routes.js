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

var wonolo = "https://api.wonolo.com/api_v2/"
var keys = require("../wonolo.config.js")

app.get('/jobs/:page/:state', function(req, res) {
  request(wonolo + 'jobs?token=' + token + 'page=' + req.params.page + '&per=18&state=' + req.params.state, function (err, res) { 
  	err ? console.log(err) : console.log(res.body);
  	console.log(req.params)
    //res.send(res.body);
  })
});

module.exports = app;