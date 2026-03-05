const notes = require('../data/notes')

exports.getNotes = (req, res) => {
  res.json(notes);
};

exports.getNoteById = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
};

exports.createNote = (req, res) => {
  const newNote = {
    id: Date.now(),
    text: req.body.text
  };

  notes.push(newNote);
  res.status(201).json(newNote);
};

exports.updateNote = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));

  if (!note) return res.status(404).json({ message: "Note not found" });

  note.text = req.body.text;
  res.json(note);
};

exports.deleteNote = (req, res) => {
  notes = notes.filter(n => n.id !== parseInt(req.params.id));
  res.json({ message: "Note deleted" });
};