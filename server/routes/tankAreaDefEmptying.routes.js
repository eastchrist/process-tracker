// Imports
const router = require("express").Router();
const tankAreaDefEmptyingController = require("../controllers/tankAreaDefEmptying.controller");

// computer routes
router.get("/all", tankAreaDefEmptyingController.getAllTankAreaDefEmptyings);
router.put("/all", tankAreaDefEmptyingController.updateTankAreaDefEmptyings);
router.put("/tankAreaDefEmptying/:id", tankAreaDefEmptyingController.updateTankAreaDefEmptying);
router.delete("/tankAreaDefEmptying/:id", tankAreaDefEmptyingController.deleteTankAreaDefEmptying);

module.exports = router;
