const router = require("express").Router();
const traceabilityController = require("../controllers/traceability.controller");

// computer routes
router.get("/all", traceabilityController.getAllTraceabilitys);

module.exports = router;
