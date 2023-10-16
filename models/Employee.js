const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    shift: {
      type: Number,
      required: true,
    },
    pay: {
      type: Number,
    },
    position: {
      type: String, // Assuming position is a string, not a number
      required: true,
    },
    clockOuts: {
      type: [
        {
          date: String,
          time: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
