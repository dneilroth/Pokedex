var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var PokemonStore = new Store(Dispatcher);
var _pokemons = {};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.pokemons);
      break;
    case "SINGLE_POKEMON_RECEIVED":
      this.foundPokemon(payload.pokemon);
      break;
  }
};

PokemonStore.all = function() {
  var pokemons = [];
  Object.keys(_pokemons).forEach( function(key){
    pokemons.push(_pokemons[key]);
  });
  return pokemons;
};

PokemonStore.resetPokemons = function(pokemons) {
  for(var i=0; i < pokemons.length; i++){
    _pokemons[i+1] = pokemons[i];
  }
  this.__emitChange();
};

PokemonStore.find = function(id) {
  return _pokemons[id];
};

PokemonStore.foundPokemon = function(pokemon) {
  this.__emitChange();
};


module.exports = PokemonStore;
