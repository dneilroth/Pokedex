var React = require('react');
var history = require('react-router').History;

var ToysIndex = React.createClass({
  mixins: [history],

  showToys: function(e){
    var url = "pokemons/" + this.props.params.pokemonId +
              "/toys/" + this.props.params.toyId;
    this.history.push(url);
  },

  render: function(){
    if(typeof this.props.toys === 'undefined'){return(<div/>);}
    var ToyIndexItems = this.props.toys.map(function(toy, idx){
      return <li onClick= {this.showToys} className='toy-list-item'
            toy={toy} key={idx}>
        name: {toy[name]},
        happiness: {toy[happiness]},
        price: {toy[price]}
      </li>
    });
    return(
      <div>
        <ul>
          {ToyIndexItems}
        </ul>
      </div>
    );
  }
});

module.exports = ToysIndex;
