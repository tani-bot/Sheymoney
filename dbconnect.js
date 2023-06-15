const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://TM:2508@cluster0.3zbffmw.mongodb.net/TM')
const connection = mongoose.connection

connection.on('error',err=>console.log("error"))
connection.on('connected',()=> console.log("connected"))