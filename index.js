const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const employeeRoute = require("./routes/employees");
const adminRoute = require("./routes/Admin");
const cors = require("cors");
const adminAuth = require("./routes/Auth");
//APP CURRENTLY WORKING

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "https://repreve.netlify.app", // Replace with the actual origin of your frontend
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"], // Include the HTTP methods you need
  })
);

app.use("#/employee", employeeRoute);
app.use("#/admin", adminRoute);
app.use("#/auth", adminAuth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
