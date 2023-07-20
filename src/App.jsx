// import { Component } from 'react';
// import PokemonForm from 'PokemonForm';
// import PokemonInfo from 'PokemonInfo';
// // import { ToastContainer } from 'react-toastify';

// export default class App extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };
//   render() {
//     return (
//       <>
//         <h1>Pokemonu</h1>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         {/* <ToastContainer position="top-right" autoClose={5000} /> */}
//       </>
//     );
//   }
// }

import PokemonForm from 'PokemonForm';
import PokemonInfo from 'PokemonInfo';

import { useState } from 'react';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');
  //   const handleFormSubmit = pokemonName => {
  //     setPokemonName(pokemonName);

  return (
    <>
      <h1>Pokemonu</h1>
      <PokemonForm onSubmit={setPokemonName} />
      {/* <PokemonForm onSubmit={handleFormSubmit} /> */}
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}
