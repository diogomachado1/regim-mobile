import styled from 'styled-components/native';
import { myTheme } from '../../../Theme/custom-theme';

export const ErrorMessage = styled.Text`
  color: ${myTheme['color-danger-500']};
  font-size: 16px;
`;

export const InputField = styled.View`
  width: 100%;
  margin: 5px;
`;

export const Input = styled.TextInput<{ error: string }>`
  background-color: #1112;
  border: 1px solid
    ${(props) => (props.error ? myTheme['color-danger-500'] : '#4445')};
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
`;

export const Label = styled.Text<{ error: string }>`
  color: ${(props) => (props.error ? myTheme['color-danger-500'] : '#444')};
  font-size: 16px;
`;
