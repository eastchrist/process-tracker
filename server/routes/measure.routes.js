// Imports
const router = require("express").Router();
const measureController = require("../controllers/measure.controller");

// computer routes
router.get("/all", measureController.getAllMeasures);
router.put("/all", measureController.updateMeasures);

router.put("/measure", measureController.addMeasure);
router.delete("/measure/:id", measureController.deleteMeasure);

module.exports = router;
