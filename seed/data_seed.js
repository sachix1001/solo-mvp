const data = require('../data.data');

exports.seed = function(knex) {
    return knex("movies")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("movies").insert(data);
      });
  };