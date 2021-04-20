// Imports
const router = require("express").Router();
const factoryController = require("../controllers/factory.controller");

// factory routes
router.get("/all", factoryController.getAllFactorys);
router.put("/all", factoryController.updateFactorys);

router.put("/factory/:id", factoryController.updateFactory);
router.delete("/factory/:id", factoryController.deleteFactory);

module.exports = router;
