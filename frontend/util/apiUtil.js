var pokemonActions = require('../actions/pokemonActions');

var apiUtil = {
  fetchAllPokemons: function(){
    $.get('api/pokemon', {}, function (pokemons){
      pokemonActions.receiveAllPokemons(pokemons);
    });
  },

};


module.exports = apiUtil;
