// Imports
const router = require("express").Router();
const fonctionController = require("../controllers/fonction.controller");

// computer routes
router.get("/all", fonctionController.getAllFonctions);
router.put("/all", fonctionController.updateFonctions);

router.put("/fonction", fonctionController.addFonctionMeasure);
router.put("/fonction/:id", fonctionController.updateFonction);
router.delete("/fonction/:id", fonctionController.deleteFonction);

module.exports = router;
