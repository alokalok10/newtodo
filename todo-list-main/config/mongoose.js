// //mongoDb is used as a database
// const mongoose = require('mongoose');

// mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true,})
// .then(() => {
//     console.log("Connected to the mongoose atlas!");
// })
// .catch((error)=>console.log("Cannot connect to the database!",error.message));


const mongoose = require("mongoose");

// const env = require('./environment');

mongoose.connect('mongodb://127.0.0.1:27017/');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

module.exports = db;