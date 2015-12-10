var Dispatcher = require('../dispatcher/dispatcher');

var pokemonActions = {
  receiveAllPokemons: function(pokemons) {
    Dispatcher.dispatch({
      actionType: "POKEMONS_RECEIVED",
      pokemons: pokemons
    });
  }
};

module.exports = pokemonActions;
