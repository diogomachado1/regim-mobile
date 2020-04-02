import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SingIn from '../Page/SingIn';
import SingUp from '../Page/SingUp';
import Perfil from '../Page/Perfil';
import Products from '../Page/Products';

// import { Container } from './styles';
const Stack = createStackNavigator();

function Meals() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meals</Text>
    </View>
  );
}
function Events() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <>
      {!signed ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="singin" component={SingIn} />
          <Stack.Screen name="singup" component={SingUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Meals" component={Meals} />
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Events" component={Events} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      )}
    </>
  );
}
