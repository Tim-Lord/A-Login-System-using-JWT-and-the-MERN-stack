const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Init Body-Parser Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/register", require("./routes/api/register"));
app.use("/api/login", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/auth"));

app.listen(PORT, err => {
  if (err) console.error(err.message);
  console.log(`Server Running on port ${PORT}... Press Ctrl + C to terminate.`);
});
