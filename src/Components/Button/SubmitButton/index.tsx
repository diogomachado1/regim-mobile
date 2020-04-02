/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, ButtonProps, Spinner, Text } from '@ui-kitten/components';
import { View, StyleProp, ViewStyle } from 'react-native';

// import { Container } from './styles';
interface SubmitButton extends ButtonProps {
  label: string;
  loading: boolean;
  styleView: StyleProp<ViewStyle>;
}
export default function SubmitButton({
  label,
  loading,
  styleView,
  ...rest
}: SubmitButton) {
  return (
    <View style={styleView}>
      {loading ? <Spinner /> : <Button {...rest}>{label}</Button>}
    </View>
  );
}
