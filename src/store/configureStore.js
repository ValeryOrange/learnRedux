import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { ping } from './enhancers/ping';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
|| compose;
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(ping)),
  );
  return store;
}