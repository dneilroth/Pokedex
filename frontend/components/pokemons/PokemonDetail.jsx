var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function(){
    return({pokemon: this.getStateFromStore()});
  },

  getStateFromStore: function(){
      return PokemonStore.find(parseInt(this.props.params.pokemonId));
    // debugger;
  },

  componentDidMount: function(){
    this.token = PokemonStore.addListener(this._onChange);
    // get me my toys!
  },

  componentWillReceiveProps: function(){
    apiUtil.fetchPokemon(this.props.params.pokemonId);
  },

  componentWillUnmount: function() {
    PokemonStore.remove(this.token);
  },

  _onChange: function(){
      this.setState({pokemon: this.getStateFromStore()});
  },

  render: function(){
    if(typeof this.state.pokemon === 'undefined'){ return (<div></div>);}
    var moves = this.state.pokemon.moves.map( function(move, idx){
      return <li key={idx}>{move}</li>;
    });
    return(
      <div>
        {this.props.children}
        <div className='pokemon-detail-pane'>
          <div className='detail'>
            <ul>
              <li>name: {this.state.pokemon.name}</li>
              <li>attack: {this.state.pokemon.attack}</li>
              <li>defense: {this.state.pokemon.defense}</li>
              <li>poke_type: {this.state.pokemon.poke_type}</li>
              <ul>moves: {moves}</ul>
              <img src={this.state.pokemon.image_url}></img>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PokemonDetail;
