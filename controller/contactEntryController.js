const bcrypt=require("bcrypt");
const ContactEntry = require("../models/contactModels");
const log=console.log;

const contactUs= async function(req,res){
    try{ 
        const rawData=await req.body;

        const userData = new ContactEntry({
            name:rawData.name,
            email: rawData.email,
            problem: rawData.problem
          });
        await userData.save();
        }
          catch(e){
            log(e);
          }
        
}
module.exports={contactUs};