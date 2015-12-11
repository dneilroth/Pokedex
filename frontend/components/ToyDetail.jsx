var React = require('react');
var PokemonStore = require('../stores/pokemon');
var apiUtil = require('../util/apiUtil');

var ToyDetail = React.createClass({
  getInitialState: function(){
    return({toy: this.getStateFromStore()});
  },

  componentDidMount:function(){
    this._onChange();
  },

  componentWillUnmount: function(){

  },

  componentWillReceiveProps: function(){

  },

  getStateFromStore: function(){
    if (typeof this.params.pokemonId === 'undefined') {
      return;
    }
    return PokemonStore.find(parseInt(this.props.params.toyId));
  },

  _onChange: function(){
    this.setState({toy: this.getStateFromStore()});
  },

  render:function(){
    return(
      <div></div>
    );
  }



});

module.exports = ToyDetail;
