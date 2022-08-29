import styled, {css} from 'styled-components/native';
import {colors} from '../../styles/colors';
import {RFValue} from 'react-native-responsive-fontsize';

interface ContainerProps {
  isColor: string;
  isActivit: boolean;
}

export const Cart = styled.View`
  width: ${RFValue(345)}px;
  height: 80px;
  background-color: ${colors.secundary};
  border-radius: 6px;
  margin-top: 4%;
  justify-content: center;
  max-width: 100%;
`;

export const Container = styled.View`
  left: ${RFValue(36)}px;
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View<ContainerProps>`
  ${props =>
    props.isColor &&
    css`
      border-left-color: ${props.isColor};
    `}
  border-left-width: ${RFValue(8)}px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  height: 80%;
  width: ${RFValue(8)}px;
  left: 4%;
  bottom: 0px;
  position: absolute;
`;

export const ContainerTitleAndDate = styled.View`
  flex-direction: column;
  width: 68%;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${colors.white};
  font-weight: bolder;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${colors.white};
  font-weight: 400;
`;

export const Priority = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${colors.white};
`;

export const ContainerButtons = styled.View`
  left: ${RFValue(22)}px;
`;

export const Button = styled.TouchableOpacity<ContainerProps>`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  background-color: transparent;
  ${props =>
    props.isColor &&
    css`
      border-color: ${props.isColor};
    `}
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Accordion = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${colors.secundary};
  border-radius: 6px;
  justify-content: center;
`;

export const LineAccordion = styled.View<ContainerProps>`
  ${props =>
    props.isColor &&
    css`
      border-left-color: ${props.isColor};
    `}
  border-left-width: ${RFValue(8)}px;
  height: 100%;
  width: ${RFValue(8)}px;
  left: 4%;
  position: absolute;
`;

export const ContainerAccordion = styled.View`
  left: ${RFValue(36)}px;
  flex-direction: row;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
`;

export const ContentButton = styled.View`
  flex-direction: column;
  align-items: center;
  padding: ${RFValue(3)}px;
`;

export const ContentDescrition = styled.View`
  width: 50%;
  max-width: 50%;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${colors.white};
  text-align: left;
`;

export const Image = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;
