import { useEffect, useState } from 'react';
import { Layout, PokemonCard } from '../src/components'
import { fetchMultiplePokemonData }  from '../src/handlers/pokeRequest';

export default function Home() {
  const [screenData, setScreenData] = useState<any>([]);
  useEffect(() =>{
    const returnedPokemonData = fetchMultiplePokemonData(10);
    Promise.all(returnedPokemonData).then((values) => screenData.push(values));
    const dataToShow = screenData.map((key:number, values:any) => {
      console.log(values);
    })
  },[])
  return (
    <Layout>
      {screenData.map((pokemon:any) => {
        console.log(pokemon);
        return (<PokemonCard name={pokemon.name} imageUrl={pokemon.image} />)
      })}
    </Layout>
  )
};
