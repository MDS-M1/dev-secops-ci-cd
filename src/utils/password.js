const bcrypt = require("bcrypt")

const saltRounds = 10

const cryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw new Error(err);
  }
};

const comparePasswords = async (plainTextPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { cryptPassword, comparePasswords }