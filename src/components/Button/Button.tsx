import React from 'react';
import {Container} from './styles';
import {Plus} from 'phosphor-react-native';
import {colors} from '../../styles/colors';
export default function Button() {
  return (
    <Container>
      <Plus color={colors.primary} size={28} />
    </Container>
  );
}
