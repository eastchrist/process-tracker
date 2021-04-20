// Imports
const router = require("express").Router();
const productController = require("../controllers/product.controller");

// computer routes
router.get("/all", productController.getAllProducts);
router.put("/all", productController.updateProducts);

router.put("/product", productController.addProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
