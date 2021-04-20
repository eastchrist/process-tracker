// Imports
const router = require("express").Router();
const tankController = require("../controllers/tank.controller");

// computer routes
router.get("/all", tankController.getAllTanks);
router.put("/all", tankController.updateTanks);
router.put("/tank/:id", tankController.updateTank);
router.delete("/tank/:id", tankController.deleteTank);

module.exports = router;
