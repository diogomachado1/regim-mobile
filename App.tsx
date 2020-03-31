import 'react-native-gesture-handler';
import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import './src/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { mapping } from '@eva-design/eva';
import { Container } from './src/Components';
import { myTheme } from './src/Theme/custom-theme';
import Routes from './src/Routes';
import { store, persistor } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApplicationProvider mapping={mapping} theme={myTheme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}
