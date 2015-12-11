var pokemonActions = require('../actions/pokemonActions');

var apiUtil = {
  fetchAllPokemons: function(){
    $.get('api/pokemon', {}, function (pokemons){
      pokemonActions.receiveAllPokemons(pokemons);
    });
  },

  fetchPokemon: function(id){
    var url = 'api/pokemon/' + id;
    $.get(url, {}, function(pokemon){
      pokemonActions.receiveSinglePokemon(pokemon);
    });
  }

}; 


module.exports = apiUtil;
