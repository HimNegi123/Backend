const log =console.log;
const bodyParser = require('body-parser')
const express=require("express");
const app=express();
const userRoute=require("./routes/userEntry")
const contactRoute=require("./routes/contactEntry")
const {connectToDatabase}=require("./mongodbConnection/connection")
const port=process.env.port || 3000;

connectToDatabase();

//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
 app.use('/user',userRoute);
 app.use('/',contactRoute);

//  Port listening
app.listen(port,()=>{
    log(`Server is now running in ${port}`);
    });