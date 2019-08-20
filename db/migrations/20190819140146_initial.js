
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('board_games', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('image');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('game_parlours', function (table) {
      table.increments('id').primary();
      table.string('location_name');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('game_parlours'),
    knex.schema.dropTable('board_games')
  ]);
};
