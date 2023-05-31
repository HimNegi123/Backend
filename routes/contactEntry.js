 const express = require("express");
 const route = express.Router();
 const {contactUs}=require("../controller/contactEntryController");

 route.post("/contactus", contactUs);

module.exports = route;