const gameLocations = require('../../seedData/parlourData');

const createParlour = (knex, parlour) => {
  return knex('game_parlours').insert({
    location_name: parlour.name,
    address: parlour.address,
    website: parlour.website,
    has_food: parlour.hasFood,
    has_drinks: parlour.hasDrinks,
    sells_games: parlour.sellsGames,
    weekday_open: parlour.weekdayOpen,
    weekday_close: parlour.weekdayClose,
    weekend_open: parlour.weekendOpen,
    weekend_close: parlour.weekendClose,
    map_link: parlour.googleMapsLink,
    byogame: parlour.bringYourOwnGame,
    logo_image: parlour.logo
  }, 'id')
}


exports.seed = function(knex) {
  return knex('game_parlours').del()
    .then(function () {
      let parlourPromises = [];

      gameLocations.forEach(parlour => {
        parlourPromises.push(createParlour(knex, parlour))
      });

      return Promise.all(parlourPromises);
    });
};
