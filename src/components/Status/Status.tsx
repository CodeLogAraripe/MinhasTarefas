import React from 'react';
import {Cart, Content, Title} from './styles';

export default function Status() {
  return (
    <Content>
      <Cart>
        <Title>A FAZER</Title>
      </Cart>
      <Cart>
        <Title>JÁ FEITO</Title>
      </Cart>
    </Content>
  );
}
