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
          date: Date,
          type: String, // You can specify the type of time off, like "vacation" or "sick leave"
        },
      ],
    },
  },
  { timestamps: true }
);

employeeSchema.methods.calculateTotalTimeOff = function () {
  return this.timeOff.reduce((totalTimeOff, entry) => {
    const timeOffDuration = entry.date.getTime();
    totalTimeOff += timeOffDuration;

    return totalTimeOff;
  }, 0);
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
