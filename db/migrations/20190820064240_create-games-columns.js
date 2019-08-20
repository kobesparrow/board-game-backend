
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
    table.dropColumn('minimum_players');
    table.dropColumn('maximum_players');
    table.dropColumn('weight');
    table.dropColumn('playtime');
    table.dropColumn('type');
  })
};
