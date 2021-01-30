const express = require("express");
const { userReg } = require("./userRouter/post.js");
const userRoute = express.Router();

userRoute.post("/register", userReg);
// userRoute.post("/login", postLogin);

module.exports = userRoute;
