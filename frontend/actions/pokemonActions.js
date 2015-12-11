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


git filter-branch -f --env-filter "GIT_AUTHOR_NAME='David Roth'; GIT_AUTHOR_EMAIL='dneilroth@gmail.com'; GIT_COMMITTER_NAME='David Roth'; GIT_COMMITTER_EMAIL='dneilroth@gmail.com';" HEAD
