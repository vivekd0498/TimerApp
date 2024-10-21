import React from 'react';
import {LogBox, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './src/navigation/MainNavigator';

import {persistor, store} from './src/store/configStore';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={'transparent'}
        />
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
