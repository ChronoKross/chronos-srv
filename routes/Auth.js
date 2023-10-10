const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10); // 10 is default, increasing password security if >
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      userName: req.body.username,
      password: hashPass,
    });

    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ userName: username });

    if (!admin) {
      return res.status(400).json("Wrong credentials.");
    }

    const validated = await bcrypt.compare(password, admin.password);

    if (!validated) {
      return res.status(400).json("Wrong credentials.");
    }

    // Removes password from the response.
    const { password: _, ...others } = admin._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
