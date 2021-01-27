const mongoose = require("mongoose");

const db_connection = mongoose
  .connect("mongodb://localhost:27017/e-commerce_project", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connect successfully..."))
  .catch((error) => console.log(error));

module.exports = db_connection;
