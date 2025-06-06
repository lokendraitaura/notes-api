const mongoose = require("mongoose");
const removeVersionAndTransform = require("../plugins/removeVersionAndTransform");
mongoose.plugin(removeVersionAndTransform);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB connection error", err);
    process.exit(1);
  }
};

module.exports = connectDB;
