const express = require("express");
require("./database/db_connection.js");
const userRoute = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());

// user routes
app.use("/api/user", userRoute);

app.listen(8000, () => {
  console.log(`server running port 8000`);
});
