import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: '',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log("помінялось ім'я");
      console.log('prevProps.pokemonName', prevProps.pokemonName);
      console.log('this.state.pokemon', this.props.pokemonName);

      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }));
    }
  }
  render() {
    return (
      <div>
        {this.state.loading && <div>Загружаю...</div>}

        {this.state.pokemon && (
          <div>
            <p> {this.state.pokemon.name}</p>
            <img
              src={
                this.state.pokemon.sprites.other['official-artwork']
                  .front_default
              }
              alt={this.state.pokemon.name}
              width="200"
            />
          </div>
        )}
      </div>
    );
  }
}
