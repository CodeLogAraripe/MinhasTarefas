import styled from 'styled-components/native';
import {colors} from '../../styles/colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  position: absolute;
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${colors.roxo};
  bottom: 5%;
  border-radius: 35px;
  z-index: 99;
  right: 6%;
  align-items: center;
  justify-content: center;
`;
