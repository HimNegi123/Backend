const mongoose=require("mongoose");
require("dotenv").config();
// login and SignIn Schema

//Schema
const Schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    problem:{
        type:String,
        require:true
    },
   
    });

    //Model
const ContactEntry=mongoose.model("ContactEntry",Schema);
module.exports=ContactEntry;