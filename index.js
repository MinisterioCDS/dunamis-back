// servidor
require("dotenv").config();
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
  await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dunamis.i9lrb.mongodb.net/`);
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
  const { nombre } = req.query;
  const jovenes = await Joven.find().sort({ name:1 });
  if(nombre) {
    const jovenesFiltrados = jovenes.filter(joven => joven.name.toLowerCase().includes(nombre.toLowerCase()));
    res.status(200).json(jovenesFiltrados);
  } else {
    res.status(200).json({ cantidad: jovenes.length, jovenes });
  };
});
