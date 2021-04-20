// Imports
const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");



// auth routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// user routes
router.get("/all", userController.getAllUsers);
router.put("/all", userController.updateAllUsers);

router.post("/user/info", userController.getUserByToken);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);



module.exports = router;
