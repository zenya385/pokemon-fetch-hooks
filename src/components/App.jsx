import PokemonForm from 'PokemonForm';
import PokemonInfo from 'PokemonInfo';

import { useState } from 'react';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');
  const handleFormSubmit = pokemonName => {
    setPokemonName(pokemonName);
  };
  return (
    <>
      <h1>Pokemonu</h1>
      <PokemonForm onSubmit={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}
