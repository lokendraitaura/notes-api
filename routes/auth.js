const express = require("express");
const router = express.Router();
const { signup, login, getAllUsers } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers);

module.exports = router;

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Create new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: signin with old user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: logIn
 */

/**
 * @swagger
 * /api/auth/getAllUsers:
 *   get:
 *     summary: get users list
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: logIn
 */
