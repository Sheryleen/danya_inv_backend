exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", table => {
    table.increments();
    table.string("sku").notNullable();
    table.string("item_name").notNullable();
    table.string("description").notNullable();
    table.string("cost").notNullable();
    table.string("quantity").notNullable;
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products");
};
