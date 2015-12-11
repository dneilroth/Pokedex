var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ApiUtil = require('../../util/apiUtil');
var PokemonIndexItem = require('./PokemonIndexItem');


var pokemonsIndex = React.createClass({

  getInitialState: function() {
    return ({index: PokemonStore.all()});
  },

  componentDidMount: function() {
    this.token = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    PokemonStore.remove(this.token);
  },

  _onChange: function() {
    this.setState({index: PokemonStore.all()});
  },

  render: function() {
    var pokemonArray = this.state.index.map(function(pokemon, index){
      return <PokemonIndexItem key={index}
        pokemon={pokemon} />;
    });
    return (
      <div>
        <ul>
          {pokemonArray}
        </ul>
      </div>
    );
  }
});

module.exports = pokemonsIndex;
