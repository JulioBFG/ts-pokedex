import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { TextProps } from './types'


export const Text = ({ size = 'md', children, asChild }: TextProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={clsx(
      'text-gray-100 font-sans',
        {
          'text-xs' : size ==='sm',
          'text-sm' : size ==='md',
          'text-md' : size ==='lg',
        }
      )}
     >
      {children}
    </Comp>
  )
}
