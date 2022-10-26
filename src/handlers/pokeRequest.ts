interface Pokemon {
    name: string;
    types: Array<{slot: number; type: object;}>
    image: string;
  }
  
  const getPokemon = async (id: number) => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon: any = await data.json();
    const shapedPokemon = <Pokemon>{
      name: pokemon?.name,
      image: pokemon?.sprites.front_default,
      types: pokemon?.types,
    }
    return shapedPokemon;
  };
  
  export const fetchSinglePokemonData = async (pokemon: number) =>  await getPokemon(pokemon);
  
  export const fetchMultiplePokemonData = (pokeNumberToSearch: number) => {
    const pokemonsData:Array<{}> = [];
    for (let search = 1; search <= pokeNumberToSearch; search++) {
      const returnedSinglePokeData = getPokemon(search);
      pokemonsData.push(returnedSinglePokeData);
    }
    return pokemonsData;
  }
  export default fetchMultiplePokemonData;
