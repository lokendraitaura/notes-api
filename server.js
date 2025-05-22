require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
const PORT = 8000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}/`);
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const { swaggerUi, specs } = require("./swagger");
app.use("/", swaggerUi.serve, swaggerUi.setup(specs));
