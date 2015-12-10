var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var apiUtil = require('./util/apiUtil');
var PokemonStore = require('./stores/pokemon');

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('#content');
  apiUtil.fetchAllPokemons();
  window.setTimeout(function() {
    console.log(PokemonStore.all());
  }
  ,0);
    // ReactDOM.render(<Router>{routes}</Router>, content);
});
