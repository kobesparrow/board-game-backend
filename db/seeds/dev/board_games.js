const boardGames = require('./../../gameData');

const createGame = (knex, game) => {
  return knex('board_games').insert({
    name: game.name,
    minimum_players: game.minPlayers,
    maximum_players: game.maxPlayers,
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

// exports.seed = function (knex) {

//   return knex('board_games').del()
//     .then(() => {
//       return Promise.all([

//         // Insert a single paper, return the paper ID, insert 2 footnotes
//         knex('board_games').insert({
//           name: 'Fooo', image: 'Lighty'
//         }, 'id')
//           .then(() => console.log('Seeding complete!'))
//           .catch(error => console.log(`Error seeding data: ${error}`))
//       ])
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };

