const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const employeeRoute = require("./routes/employees");
const adminRoute = require("./routes/Admin");
const cors = require("cors");
const adminAuth = require("./routes/Auth");
const path = require("path"); // Import the "path" module

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "https://repreve.netlify.app", // Replace with the actual origin of your frontend
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"], // Include the HTTP methods you need
  })
);

app.use("/employee", employeeRoute);
app.use("/admin", adminRoute);
app.use("/auth", adminAuth);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define a catch-all route that serves your main HTML file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
