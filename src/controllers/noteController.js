const notes = require("../data/notes");

exports.getNotes = (req, res) => {
  res.status(200).json(notes);
};

exports.getNoteById = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
};

exports.createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: "Title and content are required"
    });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content,
    createdDate: new Date().toISOString().split("T")[0],
    noteCompleted: false
  };

  notes.push(newNote);

  res.status(201).json(newNote);
};

exports.updateNote = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.title = req.body.title || note.title;
  note.content = req.body.content || note.content;
  note.noteCompleted = req.body.noteCompleted ?? note.noteCompleted;

  res.json(note);
};

exports.deleteNote = (req, res) => {
  const index = notes.findIndex(n => n.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(index, 1);

  res.json({ message: "Note deleted successfully" });
};