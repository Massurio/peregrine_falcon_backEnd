const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/users.js");

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

exports.logIn = async (req, res) => {
  try {
    if (req.user) {
      res.status(200).send({ user: req.user });
    } else {
      const user = await User.findOne({where:{ username: req.body.username }});
      if (bcrypt.compare(req.body.password, user.passw)) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        res.status(200).send({ user, token });
      } else {
        throw new Error("Password error");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({where:{ username: req.body.username }});
    if (bcrypt.compare(req.body.passw, user.passw)) {
      User.destroy({where:{ username: req.body.username }});
      res.status(200).send(`user deleted`);
    };
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};