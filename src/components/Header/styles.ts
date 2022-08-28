import styled from 'styled-components/native';
import {colors} from '../../styles/colors';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

export const Cart = styled.TouchableOpacity`
  width: 45%;
  height: 70px;
  margin: 16% ${RFValue(12)}px;
  background-color: ${colors.secundary};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${colors.white};
  font-weight: bold;
`;
