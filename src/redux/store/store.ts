import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import persistStore from 'redux-persist/es/persistStore';
import bookSlice from '../bookSlice';

const persistConfig = {
  key: 'assets',
  storage: AsyncStorage,
  whiteList: ['toggleCurrency', 'Auth', 'Paybills'],
  blacklist: ['toggleModal', 'buyAsset', 'details'],
};

const rootReducer = combineReducers({
  sessions: bookSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }).concat([]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

let persistor = persistStore(store);
export {store, persistor};
