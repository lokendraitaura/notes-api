const Note = require("../models/Note");
const mongoose = require("mongoose");

exports.createNote = async (req, res) => {
  const note = await Note.create({ ...req.body, user: req.user });
  res.json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.updateNote = async (req, res) => {
  try {
    const { noteId, ...updateData } = req.body;
    console.log("noteId", noteId);
    const updatedNote = await Note.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(noteId),
        // user: req.user,
      },
      updateData,
      { new: true }
    );

    if (!updatedNote) {
      return res
        .status(404)
        .json({ message: "Note not found or unauthorized" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "Note deleted" });
};
