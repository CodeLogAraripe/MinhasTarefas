import React from 'react';
import {Container, Logo, Title} from './styles';
import logo from '../../assets/undraw_No_data_re_kwbl.png';

export const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Title>Minhas tarefas</Title>
    </Container>
  );
};
