const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true, // Define it as unique to enforce uniqueness
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Add an index to the userName field
adminSchema.index({ username: 1 });

module.exports = mongoose.model("admin", adminSchema);
