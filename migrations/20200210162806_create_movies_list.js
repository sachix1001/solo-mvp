exports.up = function(knex) {
  return knex.schema.createTable("movies", table => {
    table
      .increments()
      .index()
      .primary();

    table.text("title").notNullable();

    table.text('content')
    table.text('img')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("movies");
};

