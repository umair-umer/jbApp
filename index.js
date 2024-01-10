/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Appwithredux=()=>(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App/>
  </PersistGate>
</Provider>
);
AppRegistry.registerComponent(appName, () => Appwithredux);
