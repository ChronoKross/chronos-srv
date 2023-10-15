const mongoose = require("mongoose");
const Employee = require("../models/Employee");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const seedData = [
  {
    name: "Nathan",
    position: 1,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "Eric",
    position: 2,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "John",
    position: 3,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "Doug",
    position: 4,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "Johny",
    position: 5,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "Red",
    position: 6,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "Jose",
    position: 7,
    timeOff: [{ date: new Date(), type: "volunteer" }],
  },
  {
    name: "Ivan",
    position: 8,
    timeOff: [{ date: new Date(), type: "volunteer" }],
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
