const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/create", auth, createNote);
router.get("/get", auth, getNotes);
router.put("/update", auth, updateNote);
router.delete("/delete/:id", auth, deleteNote);

module.exports = router;


/**
 * @swagger
 * /api/notes/create:
 *   post:
 *     summary: Create new notes
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notes created
 */

/**
 * @swagger
 * /api/notes/update:
 *   put:
 *     summary: update notes
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - noteId
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               noteId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notes updated
 */

/**
 * @swagger
 * /api/notes/get:
 *   get:
 *     summary: get notes
 *     tags: [Notes]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *     responses:
 *       200:
 *         description: get notes
 */

/**
 * @swagger
 * /api/notes/delete/{noteId}:
 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to delete
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */
