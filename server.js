var http = require('http'),
	Express = require('./lib');

this.express = new Express();

var server = http.createServer(this.express.app);

server.listen(8000, function(){
	console.log("server running in http://localhost:8000/");
});