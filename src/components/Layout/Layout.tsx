import React,{ FC, ReactElement } from 'react';

export const Layout :FC<{children: ReactElement }> = ({ children }) => (
  <div className='flex space-x-2 p-2'>
    {children}
  </div>
);
