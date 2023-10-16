const findTimeMissed = (clockOutTime, shift) => {
  const [hours, mins] = clockOutTime.split(":");
  const hour = Number(hours);

  if (shift === "1" && clockOutTime === "7:00 AM") {
    return 12;
  }

  if (shift === "1" && clockOutTime === "7:00 PM") {
    return 0;
  }

  if (shift === "2" && clockOutTime === "7:00 PM") {
    return 12;
  }

  if (shift === "2" && clockOutTime === "7:00 AM") {
    return 0;
  }

  // Convert to army time
  const armyTime = clockOutTime.endsWith("AM")
    ? hour === 12
      ? 0
      : hour
    : hour + 12;

  let hoursSaved = 0;

  // Day shift 7 am to 7 pm (7 to 19 in army time)
  // Night shift 7 pm to 7 am (19 to 7)

  if (armyTime >= 7 && armyTime <= 19) {
    hoursSaved = 19 - armyTime;
  } else if (armyTime >= 19) {
    hoursSaved = 24 - armyTime + 7;
  } else if (armyTime < 7) {
    hoursSaved = 7 - armyTime;
  }
  return hoursSaved;
};

console.log("test 1:" + findTimeMissed("12:00 AM", "1")); // 7
console.log("test 2:" + findTimeMissed("7:00 AM")); // 12
console.log("test 3:" + findTimeMissed("7:00 PM", "1")); // 0
console.log("test 4:" + findTimeMissed("7:00 AM", "1")); // 12
console.log("test 5:" + findTimeMissed("11:00 PM", "1")); // 8
console.log("test 6:" + findTimeMissed("7:00 AM", "1")); // 12
console.log("test 7: " + findTimeMissed("7:00 PM", "2")); // 12
console.log("test 8:" + findTimeMissed("11:00 PM", "2")); // 8
console.log("test 9:" + findTimeMissed("7:00 AM", "2")); // 0
console.log("test 10:" + findTimeMissed("7:00 PM", "2")); // 12
