// Imports
const router = require("express").Router();
const computerController = require("../controllers/computer.controller");

// computer routes
router.get("/all", computerController.getAllComputers);
router.put("/all", computerController.updateComputers);

router.put("/computer/:id", computerController.updateComputer);
router.delete("/computer/:id", computerController.deleteComputer);

module.exports = router;
