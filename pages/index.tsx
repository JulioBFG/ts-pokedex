import { useEffect, useState } from 'react';
import { Layout } from '../src/components/Layout/Layout';
import { Card } from '../src/components/Card/Card';
import { fetchMultiplePokemonData }  from '../src/handlers/pokeRequest';
import Head from 'next/head';

export default function Home() {
  const [screenData, setScreenData] = useState<any>([]);

  useEffect(() => {
    const returnedPokemonData = fetchMultiplePokemonData(10);
    Promise.all(returnedPokemonData).then((values) => setScreenData(values));
  },[])

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>

        {screenData.map((pokemon:any, key:number) => {
          return (<Card name={pokemon.name} imageUrl={pokemon.image}  key={key}/>)
        })}
      </Layout>
    </>
  )
};
