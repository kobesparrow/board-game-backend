
exports.up = function(knex) {
  return knex.schema.table('board_games', function (table) {
    table.integer('minimum_players');
    table.integer('maximum_players');
    table.string('weight');
    table.integer('playtime');
    table.string('type');
  })
};

exports.down = function(knex) {
  return knex.schema.table('board_games', function (table) {
    
  })
};
