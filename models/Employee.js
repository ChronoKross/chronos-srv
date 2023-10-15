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

employeeSchema.methods.calculateHoursWorked = function () {
  let totalHoursWorked = 0;

  for (const entry of this.timeOff) {
    if (entry.time) {
      // Parse the time as hours and minutes
      const [hours, minutes] = entry.time.split(":");
      const clockOut = new Date(entry.date);
      clockOut.setHours(hours, minutes, 0, 0);

      // Calculate the duration in milliseconds
      const durationInMilliseconds = clockOut - new Date(entry.date);

      // Calculate the duration in hours
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
      totalHoursWorked += durationInHours;
    }
  }

  return totalHoursWorked;
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
