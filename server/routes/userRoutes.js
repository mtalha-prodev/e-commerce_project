const router = require("express").Router();
const jwt = require("jsonwebtoken");
const moment = require("moment");
const User = require("../database/model/userSchema.js");

const token_key = process.env.SECRET_KEY;

// ROUTING FUNC
// ACCESS GET
router.get("/", async (req, res) => {
  res.status(200).json({
    status: true,
    message: "get data",
  });
});

// ROUTE
// ACCESS REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      res.status(409).json({ message: "user already exist" });
    }
    const user = await new User({ name, email, password });
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(502).json({ message: error });
  }
});

// access login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.isPasswordMatch(password))) {
    res.status(200).json({
      data: user,
      message: "LOGIN SUCCESSFULY",
    });
  } else {
    res.status(404).json({ message: "USER NOT EXIST" });
  }
});

module.exports = router;
