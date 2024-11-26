const jovenServices = require("../services/jovenServices");

module.exports = {
  getJovenesController: async (req, res) => {
    const { nombre } = req.query;
    const jovenes = await jovenServices.getJovenesService();
    if(nombre) {
      const jovenesFiltrados = jovenes.filter(joven => joven.name.toLowerCase().includes(nombre.toLowerCase()));
      res.status(200).json(jovenesFiltrados);
    } else {
      res.status(200).json({ cantidad: jovenes.length, jovenes });
    };
  },
  createJovenController: async (req, res) => {
    const createdJoven = await jovenServices.createJovenService(req.body);
    res.status(200).json({ msg: "registro exitoso", createdJoven });
  },
};
