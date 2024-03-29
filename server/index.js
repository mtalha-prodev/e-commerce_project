require("dotenv").config();
const express = require("express");
require("./database/db_connection.js");
const cors = require("cors");
const morgan = require("morgan");
const bodyPardser = require("body-parser");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(morgan());
app.use(bodyPardser.json());
app.use(bodyPardser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static("public"));
// user routes
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running ${process.env.PORT}`);
});
