
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('board_games', function(table) {
      table.increments('id').primary,
      
    })
  ])
};

exports.down = function(knex) {
  
};
