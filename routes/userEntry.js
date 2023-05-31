const express = require("express");
const route = express.Router();
const { logIn, SignIn } = require("../controller/userEntryController");

// Request for new registration
route.post("/signin", SignIn);

// Route for user login
route.post("/login", logIn);

module.exports = route;