const { cryptPassword, comparePasswords} = require("../utils/password");

const db = require("../models");
const User = db.user;

const checkIfUserExists = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user !== null;
  } catch (err) {
    throw new Error(err);
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "Email and password can not be empty!" });
    return;
  }

  const userPassword = await cryptPassword(password);

  const user = {
    email,
    password: userPassword,
  }

  User
    .findOrCreate({ where: { email: email }, defaults: user})
    .then((data) => {
      // If user email already exists
      if (!data[1]) {
        return res.status(400).send({ message: "Something went wrong!" });
      }
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Something went wrong during user creation."
      });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "Email and password cannot be empty!" });
    return;
  }

  try {
    const isUserExist = await checkIfUserExists(email);
    if (!isUserExist) {
      return res.status(400).send({ message: "Connection refused!" });
    }

    const user = await User.findOne({ where: { email } });
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Connection refused!" });
    }

    res.status(200).end();
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send({ message: "Internal server error" });
  }
};
module.exports = { register, login };
