import React, { useRef } from 'react';
import { Platform } from 'react-native';
import { Form } from '@unform/core';
import { Text, Button } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Components/Input/NativeInput';
import { SingInForm } from './styles';
import { signUpRequest } from '../../store/modules/auth/actions';
import SubmitButton from '../../Components/Button/SubmitButton';
import SingUpValidator from '../../Validator/SingUpValidator';

export default function SingUp() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const formRef = useRef(null);
  async function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
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
          SingUpValidator.validate(formRef, data, handleSubmit)
        }
      >
        <Text>Cadastrar</Text>
        <Input label="Nome" name="name" autoCapitalize="words" />
        <Input label="Email" name="email" autoCapitalize="none" />
        <Input
          label="Senha"
          name="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <SubmitButton
          styleView={{ marginTop: 30 }}
          label="Criar Conta"
          loading={loading}
          onPress={() => formRef.current.submitForm()}
        />
        <Button
          appearance="ghost"
          size="large"
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('singin')}
        >
          Já tenho uma conta
        </Button>
      </Form>
    </SingInForm>
  );
}
