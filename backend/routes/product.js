const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product");

router.post("/registerProduct",ProductController.registerProduct);
router.get("/listProduct/:name?",ProductController.listProduct);

module.exports = router;