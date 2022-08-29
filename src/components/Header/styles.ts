import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  border-color: ${colors.white};
`;

export const Logo = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(110)}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;
