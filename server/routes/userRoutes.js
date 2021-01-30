const router = require("express").Router();
const bodyPardser = require("body-parser");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const UserReg = require("../database/model/userSchema.js");

router.use(bodyPardser.json());
router.use(bodyPardser.urlencoded({ extended: true }));

router.post("/register", async (req, res) => {
  try {
    const data = await UserReg.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
    throw new Error("USER NOT REGISTER");
  }
});
// userRoute.post("/login", postLogin);

module.exports = router;
