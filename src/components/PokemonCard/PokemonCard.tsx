import Image from 'next/image'
import { FC } from 'react';
import {
  Card,
  PokemonAvatar,
  StatsContent,
  PokemonName,
} from './styles';

interface Pokemon {
  name: string;
  imageUrl?: string;
}

const PokemonCard:FC<Pokemon> = ({ name , imageUrl }) => {
  return (
    <Card>
      <PokemonAvatar>
      {imageUrl && (
        <Image src={imageUrl} width={120} height={120} />
      )}
      </PokemonAvatar>
      <PokemonName>
        {name}
      </PokemonName>
      <StatsContent />
    </Card>
  );
};

export default PokemonCard;