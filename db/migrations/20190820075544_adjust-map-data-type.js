
exports.up = function(knex) {
  return knex.schema.table('game_parlours', function (table) {
    table.string('map_link', 420);
    table.dropColumn('googlemaps_link');
  });
};

exports.down = function(knex) {
  return knex.schema.table('game_parlours', function (table) {
    table.dropColumn('map_link');
    table.string('googlemaps_link');
  });
};
