// Imports
const router = require("express").Router();
const analogController = require("../controllers/analog.controller");

// computer routes
router.get("/all", analogController.getAllAnalogs);
router.put("/all", analogController.updateAnalogs);

router.put("/analog/:id", analogController.updateAnalog);
router.delete("/analog/:id", analogController.deleteAnalog);

module.exports = router;
