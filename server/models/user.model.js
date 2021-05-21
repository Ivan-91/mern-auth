const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    surname: String,
    email: String,
    password: String,
    role: String
  })
);

module.exports = User;