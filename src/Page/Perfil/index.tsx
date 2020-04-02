import React from 'react';
import { View } from 'react-native';
import { Button } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

export default function Perfil() {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => dispatch(signOut())}>Sair</Button>
    </View>
  );
}
