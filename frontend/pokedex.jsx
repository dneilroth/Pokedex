var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/App');
var PokemonDetail = require('./components/pokemons/PokemonDetail');
var ToyDetail = require('./components/ToyDetail');

document.addEventListener('DOMContentLoaded', function () {
  var routes = (<Route path="/" component={App} >
      <Route path="pokemons/:pokemonId" component={PokemonDetail}>
        <Route path="toys/:toyId" component={ToyDetail} />
      </Route>
    </Route>);
  var root = document.querySelector('#root');
  ReactDOM.render(<Router>{routes}</Router>, root);
  // ReactDOM.render(<PokemonsIndex />, root);


  // $(function () {
      // var root = document.getElementById('root');
  // });
});
