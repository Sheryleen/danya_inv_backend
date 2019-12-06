const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const productsController = require("../db/controllers/products");

//GET ALL PRODUCTS, ADD, EDIT AND REMOVE
router.get("/products", productsController.getAllProducts);
router.get("/products/:id", productsController.getOneProduct);
router.post("/products", productsController.addOneProduct);
router.patch("/products/:id", productsController.updateOneProduct);
router.delete("/products/:id", productsController.removeOneProduct);

module.exports = router;
