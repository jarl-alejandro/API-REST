var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/note", function (err){
	if(err)
		console.log("Hay un error al conectarse a DB");
	else
		console.log("Se ha conectado a DB con exito");
});

module.exports = mongoose;