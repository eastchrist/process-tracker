// Imports
const router = require("express").Router();
const projectController = require("../controllers/project.controller");

// computer routes
router.get("/all", projectController.getAllProjects);
router.put("/all", projectController.updateProjects);
router.put("/project/:id", projectController.updateProject);
router.delete("/project/:id", projectController.deleteProject);

module.exports = router;
