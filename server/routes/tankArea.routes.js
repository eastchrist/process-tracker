// Imports
const router = require("express").Router();
const tankAreaController = require("../controllers/tankArea.controller");

// computer routes
router.get("/all", tankAreaController.getAllTankAreas);
router.put("/all", tankAreaController.updateTankAreas);
router.put("/tankArea/:id", tankAreaController.updateTankArea);
router.delete("/tankArea/:id", tankAreaController.deleteTankArea);

module.exports = router;
