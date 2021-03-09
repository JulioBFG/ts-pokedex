import { Layout, PokemonCard } from '../src/components'
import { fetchMultiplePokemonData }  from '../src/handlers/pokeRequest';

export default function Home() {
  const data = fetchMultiplePokemonData(10);
  console.log(data);
  return (
    <Layout>
      <div />
    </Layout>
  )
};
