const express = require("express");
const router = express.Router();

const createUser = require("../controllers/createUser");
const getUsers = require("../controllers/getUsers");
const getUserById = require("../controllers/getUserById");
const updateUser = require("../controllers/updateUser");
const deleteUser = require("../controllers/deleteUser");

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
