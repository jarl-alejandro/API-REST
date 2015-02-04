var addNote = require("../app/controllers/addNote");

var router = function(app){

	//API
	app.get("/api", addNote.home);
	app.get("/api/:data", addNote.note);
	app.post("/api", addNote.addnote);
	app.put("/api/:data", addNote.updateNote);
	app.delete("/api/:data", addNote.deleteNote);
}

module.exports = router;