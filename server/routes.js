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

var wonolo = "https://api.wonolo.com/api_v2"
var token = null;

app.get('/authenticate/:public/:secret', function(req, res) {
	request(wonolo + '/authenticate/?api_key=' + req.params.public + '&secret_key=' + req.params.secret, function(err, data) {
  	err ? console.log(err) : console.log('token: ', data);
  	token = data.token
	})
});

app.get('/jobs/:page/:state', function(req, res) {
  request(wonolo + 'jobs?token=' + token + 'page=' + req.params.page + '&per=18&state=' + req.params.state, function (err, data) { 
  	err ? console.log(err) : console.log(data.body);
    res.send(data.body);
  })
});

module.exports = app;

'http://api.wonolo.com/api_v2/authenticate/api_key="pk_live_286iehDFMjLSfKdoE1LM"&secret_key="sk_live_JmEPpdxafZwqi8UwZcnG" '