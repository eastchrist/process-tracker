// Imports
const router = require("express").Router();
const areaController = require("../controllers/area.controller");

// computer routes
router.get("/all", areaController.getAllAreas);
router.put("/all", areaController.updateAreas);

router.put("/area/:id", areaController.updateArea);
router.delete("/area/:id", areaController.deleteArea);

module.exports = router;
