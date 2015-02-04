var Note = require("../models/note");

exports.home = function(req, res){
	Note
	.find({})
	.exec(function (err, data){
		if(err)
			console.log("Hay un error " + err)
		else
			res.json(data);
	});
};

exports.note = function(req, res){
	var data = req.params.data;

	Note
	.find({ _id:data })
	.exec(function (err, data){
		if(err)
			console.log("Hay un error " + err);
		else
			res.json(data);
	});
};


exports.addnote = function(req, res){
	console.log("POST.--->");
	console.log(req.body);

	var note = new Note({
		title : req.body.title,
		note : req.body.note,
	});

	note.save(function (err){
		if(err) console.log("Hay un error al guardar a DB " + err);
		else console.log("Se hay guardado con exito");
	});

	res.send(note);
};

exports.updateNote = function(req, res){
	console.log("PUT.--->");
	console.log(req.body);
	var data = req.params.data;

	Note.findById(data, function (err, note){
		note.title = req.body.title;
		note.note = req.body.note;

		note.save(function (err){
			if(err)
				console.log("Hay un error al actulizar " + err);
			else
				console.log("Se ha actulizado con exito");

			res.json(note);			
		});
	});
};

exports.deleteNote = function(req, res){
	console.log("DELETE .-------->")
	var data = req.params.data;

	Note.findById(data, function (err, note){
		note.remove(function (err){
			if(err)
				console.log("Hay un error al eliminar " + err);
			else
				console.log("Se ha eliminado con exito");
		});
	});
};