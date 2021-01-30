require("dotenv").config();
const express = require("express");
require("./database/db_connection.js");
const router = require("./routes/userRoutes.js");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan());

app.use(express.json());
// user routes
app.use("/api/user", router);

app.listen(process.env.PORT, () => {
  console.log(`server running ${process.env.PORT}`);
});
