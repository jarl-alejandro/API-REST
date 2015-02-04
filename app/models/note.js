var models = require("./models"),
	Schema = models.Schema;

var NoteSchema = Schema({
	title : { type:String, required:true },
	note : String,
});

var Note = models.model("Note", NoteSchema);
module.exports = Note;