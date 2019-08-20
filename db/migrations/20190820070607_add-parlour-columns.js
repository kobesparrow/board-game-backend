
exports.up = function(knex) {
  return knex.schema.table('game_parlours', function (table) {
    table.string('address');
    table.string('website');
    table.boolean('has_food');
    table.boolean('has_drinks');
    table.boolean('sells_games');
    table.string('weekday_open');
    table.string('weekday_close');
    table.string('weekend_open');
    table.string('weekend_close');
    table.string('googlemaps_link');
    table.boolean('byogame');
    table.string('logo_image');
  });
};

exports.down = function(knex) {
  return knex.schema.table('game_parlours', function (table) {
    table.dropColumn('address');
    table.dropColumn('website');
    table.dropColumn('has_food');
    table.dropColumn('has_drinks');
    table.dropColumn('sells_games');
    table.dropColumn('weekday_open');
    table.dropColumn('weekday_close');
    table.dropColumn('weekend_open');
    table.dropColumn('weekend_close');
    table.dropColumn('googlemaps_link');
    table.dropColumn('byogame');
    table.dropColumn('logo_image');
  });
};
