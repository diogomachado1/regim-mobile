import styled from 'styled-components/native';
import { Card, Button, Icon } from '@ui-kitten/components';
import { RectButton } from 'react-native-gesture-handler';
import { myTheme } from '../../../Theme/custom-theme';

export const Container = styled(Card)`
  margin: 10px;
`;

export const GroupText = styled.View`
  margin: 10px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #3339;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
