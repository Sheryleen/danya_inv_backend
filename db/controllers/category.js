const knex = require("../knex");

exports.getAllCategory = (req, res) => {
  knex //instance of knex
    .select() //select all
    .table("category") //from products
    .then(category => res.json(category)); //getting all products back
};

exports.getOneCategory = (req, res) => {
  knex("category")
    .where("id", req.params.id)
    .then(category => res.json(category));
};

exports.addOneCategory = (req, res) => {
  knex("category")
    .insert({
      ...req.body //all column data in row
    })

    .returning("*")
    .then(category => res.json([category]));
};

exports.updateOneCategory = (req, res) => {
  knex("category")
    .update({
      ...req.body //all column data in row
    })

    .where("id", req.params.id)
    .returning("*")
    .then(updatedCategory => res.json(updatedCategory));
};

exports.removeOneCategory = (req, res) => {
  knex("category")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newCategory => res.json(newCategory)); //returns removed product
};
