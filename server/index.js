const express = require("express");
require("./database/db_connection.js");
const userRegister = require("./database/model/userRegSchema.js");

const app = express();

app.use(express.json());

app.post("/api/register", async (req, res) => {
  try {
    const data = await userRegister.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("Hi dear");
});

app.listen(8000, () => {
  console.log(`server running port 8000`);
});
