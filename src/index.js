const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.disable("x-powered-by");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
  origin: ['http://127.0.0.1:8080']
}
app.use(cors(corsOptions))

const db = require("./models");

if (process.env.NODE_ENV !== 'production') {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
} else {
  db.sequelize.authenticate().then(() => {
    console.log("Connected to the database!");
  })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
  db.sequelize.sync()
}


// Routes
const user = require('./routes/user.routes')
app.use('/api/user', user)

const PORT = process.env.PORT || 3000;
let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  app,
  closeServer: () => {
    server.close();
  }
};