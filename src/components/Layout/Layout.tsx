import React,{ FC, ReactElement } from 'react';
import {  ContentWrapper, } from './styles';

const Layout :FC<{children: ReactElement }> = ({ children }) => (
  <ContentWrapper>
    {children}
  </ContentWrapper>
);

export default Layout;