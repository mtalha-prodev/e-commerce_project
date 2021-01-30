const UserReg = require("../../database/model/userSchema.js");

// registration
const userReg = async (req, res) => {
  try {
    const data = await UserReg.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
    throw new Error("USER NOT REGISTER");
  }
};

module.exports = { userReg };
