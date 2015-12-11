var Dispatcher = require('../dispatcher/dispatcher');

var pokemonActions = {
  receiveAllPokemons: function(pokemons) {
    Dispatcher.dispatch({
      actionType: "POKEMONS_RECEIVED",
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon) {
    Dispatcher.dispatch({
      actionType: "SINGLE_POKEMON_RECEIVED",
      pokemon: pokemon
    });
  }
};

module.exports = pokemonActions;
