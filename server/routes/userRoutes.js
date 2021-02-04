const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");
const moment = require("moment");
const verifyToken = require("../middleware/verifyToken.js");

const storage = require("./storage.js");

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
router.post("/login", verifyToken, async (req, res) => {
  // generate token
  const { email, password } = req.body;

  const user = await User.findOne({ email });

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

router.post("/upload", verifyToken, async (req, res) => {
  const upload = storage.getUpload();

  upload(req, res, async (error) => {
    if (error) {
      res.status(400).json({
        status: false,
        message: "token not access",
        error,
      });
    }
    if (!req.file) {
      res.status(401).json({
        status: false,
        message: "please choose the file",
      });
    }
    const temp = {
      profile_pic: req.file.path,
      updatedAt:
        moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    };
    try {
      const user = await User.findByIdAndUpdate({ _id: req.user.id }, temp, {
        new: true,
      });
      res.status(200).json({
        status: true,
        user: user,
        message: "updated success....",
      });
    } catch (error) {
      res
        .status(502)
        .json({ status: false, message: "user not found in database", error });
    }
  });
});

module.exports = router;
