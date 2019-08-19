const boardGames = require('./../../gameData');

const createGame = (knex, game) => {
  return knex('board_games').insert({
    name: game.name,
    min_players: game.minPlayers,
    max_players: game.maxPlayers,
    weight: game.weight,
    playtime: game.timeToPlay,
    type: game.type,
    image: game.image
  }, 'id')
}

exports.seed = function(knex) {
  return knex('board_games').del()
    .then(function () {
      let gamePromises = [];

      boardGames.forEach(game => {
        gamePromises.push(createGame(knex, game))
      })

      return Promise.all(gamePromises)
    });
};
