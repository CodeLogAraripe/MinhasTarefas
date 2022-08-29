import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0%;
  background-color: ${colors.secundary};
  width: 100%;
  height: 80%;
  border-radius: 22px;
`;

export const ViewListTask = styled.View`
  width: 100%;
  align-items: center;
`;
