const { Router } = require("express");
const jovenControllers = require("../controllers/jovenControllers");

const router = Router();

router.get("/", jovenControllers.getJovenesController);
router.post("/", jovenControllers.createJovenController);

module.exports = router;
