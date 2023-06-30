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
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Routes
const user = require('./routes/user.routes')
app.use('/api/user', user)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});