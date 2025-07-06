const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const { deleteUser } = require("../controller/deleteUser");
const { updateUser } = require("../controller/updateUser");
router.post("/createUser", createUser);
router.get("/getUsers/:id?", getUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
