import Image from 'next/image'
import {
  Card,
  PokemonAvatar,
  StatsContent,
} from './styles';
import Bulba from './bulba.png';

const PokemonCard = ({ }) => (
  <Card>
    <PokemonAvatar>
      <Image src={Bulba} />
    </PokemonAvatar>
    <StatsContent />
  </Card>
);

export default PokemonCard;