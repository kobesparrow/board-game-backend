
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('board_games', function(table) {
      table.increments('id').primary;
      table.string('name');
      table.integer('minimum players');
      table.integer('maximum players');
      table.string('weight');
      table.integer('time to play');
      table.string('type');
      table.string('image');

      table.timestamps(true, true)
    })
  ]);
};

exports.down = function(knex) {
  knex.schema.dropTable('board_games');
};
