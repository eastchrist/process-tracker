// Imports
const router = require("express").Router();
const plcController = require("../controllers/plc.controller");

// computer routes
router.get("/all", plcController.getAllPlcs);
router.put("/all", plcController.updatePlcs);
router.put("/plc/:id", plcController.updatePlc);
router.delete("/plc/:id", plcController.deletePlc);

module.exports = router;
