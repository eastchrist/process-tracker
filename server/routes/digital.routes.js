// Imports
const router = require("express").Router();
const digitalController = require("../controllers/digital.controller");

// computer routes
router.get("/all", digitalController.getAllDigitals);
router.put("/all", digitalController.updateDigitals);
router.put("/digital/:id", digitalController.updateDigital);
router.delete("/digital/:id", digitalController.deleteDigital);

module.exports = router;
