// Imports
const router = require("express").Router();
const projectTypeController = require("../controllers/projectType.controller");

// computer routes
router.get("/all", projectTypeController.getAllProjectTypes);
router.put("/all", projectTypeController.updateProjectTypes);
router.put("/projectType/:id", projectTypeController.updateProjectType);
router.delete("/projectType/:id", projectTypeController.deleteProjectType);

module.exports = router;
