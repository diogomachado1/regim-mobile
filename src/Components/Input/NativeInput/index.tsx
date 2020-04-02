/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
// eslint-disable-next-line no-unused-vars
import { InputProps } from '@ui-kitten/components';
import { ErrorMessage, InputField, Label, Input } from './styles';

export interface InputCustomProps extends InputProps {
  name: string;
  label: string;
}

function NativeInputCustom({ name, label, ...rest }: InputCustomProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <InputField>
      {label && <Label error={error}>{label}</Label>}
      <Input
        ref={inputRef}
        error={error}
        defaultValue={defaultValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputField>
  );
}
export default NativeInputCustom;
