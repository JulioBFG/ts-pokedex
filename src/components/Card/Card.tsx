import Image from 'next/image'
import { FC } from 'react';
import { CardProps } from './types'
import { Text } from '@/components/Text/Text';



export const Card:FC<CardProps> = ({ name , imageUrl }) => {
  return (
    <div className='bg-blue-300 p-3 mx-2 rounded'>
      <div>
      {imageUrl && (
        <Image src={imageUrl} width={120} height={120} alt="poke"/>
      )}
      </div>
      <Text>
        {name}
      </Text>
    </div>
  );
};

