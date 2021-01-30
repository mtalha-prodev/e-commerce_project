const mongoose = require("mongoose");
const moment = require("moment");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    default: "empty-avatar.jpg",
  },
  createdAt: {
    type: String,
    default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh/mm/ss"),
  },
  updatedAt: {
    type: String,
    default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh/mm/ss"),
  },
});

const UserReg = new mongoose.model("User", user);

module.exports = UserReg;
