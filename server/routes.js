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

app.use(express.static(__dirname + '/public'));


module.exports = app;
