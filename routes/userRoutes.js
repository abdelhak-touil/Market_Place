const express = require("express");
const router = express.Router();
const authUser = require("../controllers/userController");
const getUserProfil = require("../controllers/userController");
const protect = require("../middelwares/authMiddlewares");

router.post("/login", authUser);

router.route("/profile").get(protect, getUserProfil);

module.exports = router;
