const mongoose = require("mongoose");

const userRegisterionSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    maxlength: [20, "maximum twenty character"],
    minlength: [3, "minimum three character"],
  },
  lname: {
    type: String,
    required: true,
    maxlength: [20, "maximum twenty character"],
    minlength: [3, "minimum three character"],
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "please chose 6 character"],
  },
});

const userRegister = new mongoose.model("Registration", userRegisterionSchema);

module.exports = userRegister;
