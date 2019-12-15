const knex = require("../knex");

exports.getAllProducts = (req, res) => {
  knex //instance of knex
    .select() //select all
    .table("products") //from products
    .then(products => res.json(products)); //getting all products back
};

exports.getOneProduct = (req, res) => {
  knex("products")
    .where("id", req.params.id)
    .then(products => res.json(products));
};

exports.addOneProduct = (req, res) => {
  knex("products")
    .insert({
      ...req.body //all column data in row
    })

    .returning("*")
    .then(products => res.json([products]));
};

exports.updateOneProduct = (req, res) => {
  console.log("req.body", req.body);
  knex("products")
    .update({
      ...req.body, //all column data in row
      updated_at: new Date()
    })

    .where("id", req.params.id)
    .returning("*")
    .then(updatedProduct => res.json(updatedProduct));
};

exports.removeOneProduct = (req, res) => {
  knex("products")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newProduct => res.json(newProduct)); //returns removed product
};
