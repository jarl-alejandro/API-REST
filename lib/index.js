var express = require("express"),
	bodyParser = require("body-parser"),
	swig = require("swig"),
	router = require("./router");

var AppExpress = function(config){
	config = config || {};

	this.app = express();

	//middelware
	this.app.engine('html', swig.renderFile);
	this.app.set('view engine', 'html');
	this.app.set('views', './app/views');

	this.app.use(bodyParser.json());
	this.app.use(bodyParser.urlencoded({ extended : false}));

	//ROUTER
	router(this.app);
}

module.exports = AppExpress;