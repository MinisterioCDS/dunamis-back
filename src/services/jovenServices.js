const Joven = require("../models/Joven");

module.exports = {
  getJovenesService: async () => {
    return await Joven.find().sort({ name:1 });
  },
  createJovenService: async newJoven => {
    return await Joven.create(newJoven);
  },
};
