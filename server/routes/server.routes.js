// Imports
const router = require("express").Router();
const serverController = require("../controllers/server.controller");

// computer routes
router.get("/all", serverController.getAllServers);
router.put("/all", serverController.updateServers);
router.put("/server/:id", serverController.updateServer);
router.delete("/server/:id", serverController.deleteServer);

module.exports = router;
