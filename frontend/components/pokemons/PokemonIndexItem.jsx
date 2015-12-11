var React = require('react');
var history = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [history],
  showDetail: function(e) {
    var pokemonId = this.props.pokemon.id;
    var url = "/pokemons/" + pokemonId;
    this.history.push(url);
  },

  render: function() {
    return(
      <li className='poke-list-item' onClick={this.showDetail}>name:
        {this.props.pokemon.name},
        type: {this.props.pokemon.poke_type}</li>
    );
  }
});

module.exports = PokemonIndexItem;
