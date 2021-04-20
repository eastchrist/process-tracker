// Imports
const router = require("express").Router();
const measureTypeController = require("../controllers/measureType.controller");

// computer routes
router.get("/all", measureTypeController.getAllMeasureTypes);
router.put("/all", measureTypeController.updateMeasureTypes);
router.put("/measureType/:id", measureTypeController.updateMeasureType);
router.delete("/measureType/:id", measureTypeController.deleteMeasureType);

module.exports = router;
