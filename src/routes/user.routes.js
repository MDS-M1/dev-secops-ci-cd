const express = require("express")
const router = express.Router()

const user = require("../controller/user.controller");

router.post("/", user.create)

// router.get("/", user.findAll); // isAdmin
// router.get("/:id", user.findOne); // isAdmin
// router.put("/:id", user.update); // isAdmin / isCurrentUser
// router.delete("/:id", user.delete); // isAdmin / isCurrentUser

module.exports = router