// ======================= class component ========================
// import { Component } from 'react';

// export default class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     // loading: false,
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.pokemonName !== this.props.pokemonName) {
//       this.setState({ status: 'pending', pokemon: null });
//       // console.log("помінялось ім'я");
//       // console.log('prevProps.pokemonName', prevProps.pokemonName);
//       // console.log('this.state.pokemon', this.props.pokemonName);
//       setTimeout(() => {
// fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
//           .then(response => {
//             if (response.ok) {
//               return response.json();
//             }
//             return Promise.reject(
//               new Error(`Немає покемона з ім'ям
//             ${this.props.pokemonName}`)
//             );
//           })
//           .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//           .then(this.setState({ error: false }))
//           .catch(error => this.setState({ error, status: 'rejected' }));
//         // .finally(() => this.setState({ loading: false }));
//       }, 1000);
//     }
//   }
//   render() {
//     const { error, pokemon, status } = this.state;
//     // const { pokemonName } = this.props;

//     // ('idle');
//     // ('pending');
//     // ('resolved');
//     // ('rejected');

//     if (status === 'pending') {
//       return <div>Загружаю...</div>;
//     }
//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>;
//     }
//     if (status === 'resolved') {
//       return (
//         <div>
//           <p> {pokemon.name}</p>
//           <img
//             src={pokemon.sprites.other['official-artwork'].front_default}
//             alt={pokemon.name}
//             width="250"
//           />
//         </div>
//       );
//     }
//     // return (
//     //   <div>
//     //     {error && <h1>{error.message}</h1>}
//     //     {loading && <div>Загружаю...</div>}
//     //     {!pokemonName && <div>Введіть ім'я покемона</div>}
//     //     {pokemon && (
//     //       <div>
//     //         <p> {pokemon.name}</p>
//     //         <img
//     //           src={pokemon.sprites.other['official-artwork'].front_default}
//     //           alt={pokemon.name}
//     //           width="250"
//     //         />
//     //       </div>
//     //     )}
//     //   </div>
//     // );
//   }
// }

// ===================== hooks ==============================
import { useEffect, useState } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`Немає покемона з ім'ям
            ${pokemonName}`)
        );
      })
      .then(pokemon => {
        setStatus(Status.RESOLVED);
        setPokemon(pokemon);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.PENDING) {
    return <div>Загружаю...</div>;
  }
  if (status === Status.REJECTED) {
    return <h1>{error.message}</h1>;
  }
  if (status === Status.RESOLVED) {
    return (
      <div>
        <p> {pokemon.name}</p>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          width="250"
        />
      </div>
    );
  }
}
