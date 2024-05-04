import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './Reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persistedReducer and thunk middleware
export const store = createStore(persistedReducer);

// Create a persistor for the Redux store
export const persistor = persistStore(store);
