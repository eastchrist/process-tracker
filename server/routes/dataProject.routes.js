// Imports
const router = require("express").Router();
const dataProjectController = require("../controllers/dataProject.controller");

// computer routes
router.get("/all", dataProjectController.getAllDataProjects);
router.put("/all", dataProjectController.updateDataProjects);

router.put("/dataProject/:id", dataProjectController.updateDataProject);
router.delete("/dataProject/:id", dataProjectController.deleteDataProject);

module.exports = router;
