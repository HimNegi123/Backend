const mongoose=require("mongoose");
require("dotenv").config();
async function connectToDatabase() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/xenonstack");
      console.log("server connected to database");
    } catch (err) {
      console.log(`database threw ${err}`);
    }
  };
  module.exports={connectToDatabase};