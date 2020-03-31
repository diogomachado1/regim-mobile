import React, { useRef } from 'react';
import { Button, Platform } from 'react-native';
import { Form } from '@unform/core';
import { Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Components/Input';
import { SingInForm } from './styles';
import SingInValidator from '../../Validator/SingInValidator';

export default function SingUp() {
  const navigation = useNavigation();

  const formRef = useRef(null);
  async function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <SingInForm
      behavior={Platform.select({
        ios: 'padding',
        android: 'padding',
      })}
    >
      <Form
        ref={formRef}
        onSubmit={(data) =>
          SingInValidator.validate(formRef, data, handleSubmit)
        }
      >
        <Text>Cadastrar</Text>
        <Input label="Email" name="email" autoCapitalize="none" />
        <Input
          label="Senha"
          name="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
        <Button
          title="Já tenho uma conta"
          onPress={() => navigation.navigate('singin')}
        />
      </Form>
    </SingInForm>
  );
}
