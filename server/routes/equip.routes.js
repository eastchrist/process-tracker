// Imports
const router = require("express").Router();
const equipController = require("../controllers/equip.controller");

// computer routes
router.get("/all", equipController.getAllEquips);
router.put("/all", equipController.updateEquips);
router.put("/equip/:id", equipController.updateEquip);
router.delete("/equip/:id", equipController.deleteEquip);

module.exports = router;
