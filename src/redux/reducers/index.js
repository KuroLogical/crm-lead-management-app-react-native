import { combineReducers } from 'redux';
import DarkReducer from './DarkReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'DarkReducer',
  storage: AsyncStorage,
  whitelist: ['DarkReducer'],
};

const rootReducers = combineReducers({
  DarkReducer: persistReducer(persistConfig, DarkReducer),
});

export default rootReducers;
