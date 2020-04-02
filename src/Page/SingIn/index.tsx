import React, { useRef } from 'react';
import { Platform, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { SingInForm } from './styles';
import SingInValidator from '../../Validator/SingInValidator';
import { signInRequest } from '../../store/modules/auth/actions';
import Input from '../../Components/Input/index';
import SubmitButton from '../../Components/Button/SubmitButton';

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);
  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
        <Input label="Email" name="email" autoCapitalize="none" />
        <Input
          label="Senha"
          name="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Text>{loading}</Text>
        <SubmitButton
          label="Acessar"
          loading={loading}
          styleView={{ marginTop: 30 }}
          onPress={() => formRef.current.submitForm()}
        />
        <Button
          style={{ marginTop: 10 }}
          size="large"
          appearance="ghost"
          onPress={() => navigation.navigate('singup')}
        >
          Criar uma conta
        </Button>
      </Form>
    </SingInForm>
  );
}
