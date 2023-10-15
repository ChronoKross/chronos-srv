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
  const millisecondsInAnHour = 60 * 60 * 1000; // 60 minutes in an hour
  const currentDate = new Date();

  return this.timeOff.reduce((totalTimeOff, entry) => {
    const timeOffStart = entry.date;
    const timeOffEnd = currentDate; // Assuming you are calculating up to the current date
    const timeOffDurationInHours =
      (timeOffEnd - timeOffStart) / millisecondsInAnHour;
    totalTimeOff += timeOffDurationInHours;

    return totalTimeOff;
  }, 0);
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
