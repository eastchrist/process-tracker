// Imports
const router = require("express").Router();
const tankAreaDefFillingController = require("../controllers/tankAreaDefFilling.controller");

// computer routes
router.get("/all", tankAreaDefFillingController.getAllTankAreaDefFillings);
router.put("/all", tankAreaDefFillingController.updateTankAreaDefFillings);
router.put("/tankAreaDefFilling/:id", tankAreaDefFillingController.updateTankAreaDefFilling);
router.delete("/tankAreaDefFilling/:id", tankAreaDefFillingController.deleteTankAreaDefFilling);

module.exports = router;
