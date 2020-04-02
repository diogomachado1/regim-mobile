import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Icon } from '@ui-kitten/components';
import { myTheme } from '../../../Theme/custom-theme';

export const ButtonContainer = styled(RectButton)<{
  color: string;
}>`
  background: ${({ color }) => myTheme[`color-${color || 'success'}-200`]};
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin: 0 5px;
`;

export const ButtonIcon = styled(Icon).attrs((props) => ({
  fill: myTheme[`color-${props.color || 'success'}-500`],
}))``;
