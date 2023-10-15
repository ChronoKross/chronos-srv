const mongoose = require("mongoose");
const Employee = require("../models/Employee");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));

const seedData = [
  { name: "Nathan", position: 1, timeOff: [{ date: test, type: volunteer }] },
  { name: "Eric", position: 2, timeOff: [{ date: test, type: volunteer }] },
  { name: "John", position: 3, timeOff: [{ date: test, type: volunteer }] },
  { name: "Doug", position: 4, timeOff: [{ date: test, type: volunteer }] },
  { name: "Johny", position: 5, timeOff: [{ date: test, type: volunteer }] },
  { name: "Red", position: 6, timeOff: [{ date: test, type: volunteer }] },
  { name: "Jose", position: 7, timeOff: [{ date: test, type: volunteer }] },
  { name: "Ivan", position: 8, timeOff: [{ date: test, type: volunteer }] },
];

const seedDB = async () => {
  await Employee.deleteMany({});
  await Employee.insertMany(seedData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
