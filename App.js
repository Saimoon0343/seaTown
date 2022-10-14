import React from 'react';
import FlashMessage from 'react-native-flash-message';
import AppTwo from './AppTwo';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Reducer/index';
// import {NativeBaseProvider, Box} from 'native-base';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <NativeBaseProvider> */}
        <AppTwo />
        {/* </NativeBaseProvider> */}
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}

export default App;
