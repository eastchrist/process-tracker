// Imports
const router = require("express").Router();
const projectStatusController = require("../controllers/projectStatus.controller");

// computer routes
router.get("/all", projectStatusController.getAllProjectStatus);
router.put("/all", projectStatusController.updateProjectStatuss);
router.put("/projectStatus/:id", projectStatusController.updateProjectStatus);
router.delete("/projectStatus/:id", projectStatusController.deleteProjectStatus);

module.exports = router;
