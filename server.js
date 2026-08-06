const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow requests from the React frontend
app.use(cors());

app.get("/", (req, res) => {
  res.send("CloudOps Backend is running 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Backend 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
