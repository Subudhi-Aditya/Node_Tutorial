// const express = require("express");
// const dotEnv = require('dotenv');
// const { MongoClient } = require("mongodb");

// const app = express()

// dotEnv.config()

// MongoClient.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("Mongo DB connected successfully");
// })
// .catch((err)=>{
//     console.log(err);
// })
// const PORT = 5000
// // console.log(process.env);

// app.listen(PORT, ()=>{
//     console.log(`Server started and running at ${PORT}`);
// });

const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const employeeRoutes = require("./routes/employeeRoutes")

const app = express()

const PORT = process.env.PORT || 5000 

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("error",err);
})

app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`);
})




