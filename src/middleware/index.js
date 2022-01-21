const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/users.js");

exports.hashing = async (req, res, next) => {
  try {
    req.body.passw = await bcrypt.hash(req.body.passw, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodeToken = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne(decodeToken._id);
    req.user.passw ="";
    if (!req.user) {
      throw new Error("User not found");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};