const { table } = require("../connection");

exports.up = function(knex) {
  return knex.schema.createTable("movie_theaters", (table) => {
    // movie_id setup
    table.integer("movie_id").unsigned().notNullable();
    table.foreign("movie_id")
        .references("movie_id")
        .inTable("movies")
        .onDelete("CASCADE");
    // theater_id setup
    table.integer("theater_id").unsigned().notNullable();
    table.foreign("theater_id")
        .references("theater_id")
        .inTable("theaters")
        .onDelete("CASCADE");
    // is_showing setup
    table.boolean("is_showing");
    table.timestamps(true, true);
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable("movie_theaters");
};