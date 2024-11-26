const mongoose = require("mongoose");

const jovenSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
  phone: Number,
});

const Joven = mongoose.model("Joven", jovenSchema);

module.exports = Joven;
