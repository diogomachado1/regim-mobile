/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Platform } from 'react-native';
import NativeInputCustom, { InputCustomProps } from './NativeInput';
import WebInputCustom from './WebInput';

// import { Container } from './styles';

export default function Input(props: InputCustomProps) {
  return Platform.OS === 'web' ? (
    <WebInputCustom {...props} />
  ) : (
    <NativeInputCustom {...props} />
  );
}
