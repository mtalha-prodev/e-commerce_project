const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");
const moment = require("moment");
const token_verify = require("../middleware/token_verify.js");

const upload = require("./storage.js");

// set logic to uploadImage image in database

// ROUTE
// ACCESS REGISTER

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ data });
    res.send({ data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

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
router.post("/login", token_verify, async (req, res) => {
  // generate token
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  console.log(upload);
  if (user && (await user.isPasswordMatch(password))) {
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    res.status(200).json({
      message: "LOGIN SUCCESSFULY",
      data: user,
      token: token,
    });
  } else {
    res.status(404).json({ message: "USER NOT EXIST" });
  }
});

module.exports = router;
