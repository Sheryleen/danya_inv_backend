const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const categoryController = require("../db/controllers/category");

//GET ALL PRODUCTS, ADD, EDIT AND REMOVE
router.get("/category", categoryController.getAllCategory);
router.get("/category/:id", categoryController.getOneCategory);
router.post("/category", categoryController.addOneCategory);
router.patch("/category/:id", categoryController.updateOneCategory);
router.delete("/category/:id", categoryController.removeOneCategory);

module.exports = router;
