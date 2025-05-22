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
router.put("/update/:id", auth, updateNote);
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
 *               - notesId
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               notesId:
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
 * /api/notes/delete:
 *   delete:
 *     summary: delete notes
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notes deleted
 */