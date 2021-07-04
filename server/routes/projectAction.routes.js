// Imports
const router = require("express").Router();
const projectActionController = require("../controllers/projectAction.controller");

// computer routes
router.get("/all", projectActionController.getAllProjectActions);
router.put("/all", projectActionController.updateProjectActions);

router.put("/projectAction", projectActionController.addProjectAction);
router.put("/projectAction/:id", projectActionController.updateProjectAction);
router.delete("/projectAction/:id", projectActionController.deleteProjectAction);

module.exports = router;
