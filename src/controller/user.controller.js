const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ message: "Email and password can not be empty!" });
    return;
  }

  const user = {
    email: req.body.email,
    password: req.body.password,
  }

  User
    .create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong during user creation."
      });
    });

};
