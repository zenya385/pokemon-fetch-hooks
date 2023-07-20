# React homework template

Ігнорування першого рендера

export default function PokemonForm({ pokemonName }) { const [pokemonName,
setPokemonName] = useState(); const isFirstRender = useRef(true) useEffect(()=>{
if(isFirstRender.current){ isFirstRender.current = false; return; } })

return ( <> <form onSubmit={this.handleSubmit}> <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        /> <button type="submit">Знайти</button> </form> </> ); }
