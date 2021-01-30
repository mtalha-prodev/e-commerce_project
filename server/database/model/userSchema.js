const mongoose = require("mongoose");
const moment = require("moment");

const userReg = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: [20, "maximum twenty character"],
    minlength: [3, "minimum three character"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "please chose 6 character"],
  },
  profile_pic: {
    type: String,
    default: "empty-avatar.jpg",
  },
  createdAt: {
    type: Date,
    default: `${moment().format("DD/MM/YYYY")} ; ${moment().format(
      "hh/mm/ss"
    )}`,
  },
  updatedAt: {
    type: Date,
    default: `${moment().format("DD/MM/YYYY")} ; ${moment().format(
      "hh/mm/ss"
    )}`,
  },
});

const UserReg = new mongoose.model("User", userReg);

module.exports = UserReg;
