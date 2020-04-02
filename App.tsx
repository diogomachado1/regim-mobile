import 'react-native-gesture-handler';
import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import './src/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { mapping } from '@eva-design/eva';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { myTheme } from './src/Theme/custom-theme';
import Routes from './src/Routes';
import { store, persistor } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={myTheme}>
          <NavigationContainer>
            <SafeAreaProvider>
              <Routes />
            </SafeAreaProvider>
          </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}
