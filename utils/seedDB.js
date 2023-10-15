const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const MONGO_URL = "mongodb://localhost:27017/repreve";
const express = require("express");
const app = express();

const MONGO =
  "mongodb+srv://ChronoKross:Password@repreve.psp1utq.mongodb.net/?retryWrites=true&w=majority";
console.log(typeof Number(new Date()));
mongoose
  .connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const seedData = [
  {
    name: "Nathan",
    position: 1,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "Eric",
    position: 2,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "John",
    position: 3,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "Doug",
    position: 4,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "Johny",
    position: 5,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "Red",
    position: 6,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "Jose",
    position: 7,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
  {
    name: "Ivan",
    position: 8,
    timeOff: [{ date: new Date().toISOString(), type: "volunteer" }],
  },
];

const seedDB = async () => {
  try {
    await Employee.deleteMany({});
    await Employee.insertMany(seedData);
    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
