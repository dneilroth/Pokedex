var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var PokemonStore = new Store(Dispatcher);
var _pokemons = {};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      console.log(payload.pokemons);
      this.resetPokemons(payload.pokemons);
      break;
  }
};

PokemonStore.all = function() {
  var pokemons = [];
  Object.keys(_pokemons).forEach( function(key){
    pokemons.push(_pokemons[key]);
    console.log(".all:");
    console.log(pokemons);
  });
  return pokemons;
};

PokemonStore.resetPokemons = function(pokemons) {
  console.log("reset function");
  for(var i=0; i <= pokemons.length; i++){
    _pokemons[i+1] = pokemons[i];}
};



module.exports = PokemonStore;
