// ======================= class component ========================
// import { Component, useState } from 'react';
// import { toast } from 'react-toastify';

// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleNameChange = e => {
//     this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.pokemonName.trim() === '') {
//       toast.error("🦄 Введи ім'я покемона!", {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'dark',
//       });
//       return;
//     }
//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };
//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="pokemonName"
//             value={this.state.pokemonName}
//             onChange={this.handleNameChange}
//           />
//           <button type="submit">Знайти</button>
//         </form>
//       </>
//     );
//   }
// }

// ========================= hooks ===============================
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pokemonName.trim() === '') {
      toast.error("🦄 Введи ім'я покемона!", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">Знайти</button>
      </form>
    </>
  );
}
