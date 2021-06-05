const express = require("express");
const router = express.Router();
const getProductById = require("../controllers/productController");
const getProducts = require("../controllers/productController");

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

module.exports = router;
