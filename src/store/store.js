import {  createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers/reducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // Only persist the 'auth' reducer or any other reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);