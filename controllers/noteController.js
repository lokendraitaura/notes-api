const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  const note = await Note.create({ ...req.body, user: req.user });
  res.json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user });
  res.json(notes);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.json({ message: "Note deleted" });
};
