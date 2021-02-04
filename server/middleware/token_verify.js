const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");

const token_verify = async (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decoded.id);
      // res.status(200).json({
      //   status: true,
      //   message: "user verify",
      // });
      res.user = {
        id: user.id,
      };

      next();
    } catch (error) {
      res.status(401).json({
        message: error,
      });
    }
  }
};

module.exports = token_verify;
