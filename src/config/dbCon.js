require("dotenv").config();
const mongoose = require("mongoose");

module.exports = {
  dbCon: async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dunamis.i9lrb.mongodb.net/`);
  }
};
