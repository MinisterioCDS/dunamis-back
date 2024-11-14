// servidor
const express = require("express");
// middlewares
const morgan = require("morgan");
const cors = require("cors");
// base de datos / models
const mongoose = require("mongoose");

const app = express();

// usar middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// conectar a la base de datos

const dbCon = async () => {
  await mongoose.connect(`mongodb+srv://ministeriocdsoficial:gcNlAMdOlIfb0tX0@dunamis.i9lrb.mongodb.net/`);
};

dbCon().then(() => {
  // levantar servidor
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});

// models

const jovenSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
  phone: Number,
});

const Joven = mongoose.model("Joven", jovenSchema);

app.post("/", async (req, res) => {
  const createdJoven = await Joven.create(req.body);
  res.status(200).json({ msg: "registro exitoso", createdJoven });
});

app.get("/", async (req, res) => {
  const jovenes = await Joven.find();
  res.status(200).json({ cantidad: jovenes.length, jovenes });
});
