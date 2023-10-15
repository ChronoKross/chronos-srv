const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String, // Assuming position is a string, not a number
      required: true,
    },
    timeOff: {
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
