// Imports
const router = require("express").Router();
const projectController = require("../controllers/project.controller");
const fonctionController = require("../controllers/fonction.controller");
const actionController = require("../controllers/projectAction.controller");
// computer routes
router.get("/all", projectController.getAllProjects);
router.put("/all", projectController.updateProjects);
router.put("/project/:id", projectController.updateProject);
router.delete("/project/:id", projectController.deleteProject);

router.put("/fonctions", fonctionController.updateProjectFonctions);
router.delete("/fonctions/:id", fonctionController.deleteProjectFonctions);
router.delete("/actions/:id", actionController.deleteProjectProjectActions);
module.exports = router;
