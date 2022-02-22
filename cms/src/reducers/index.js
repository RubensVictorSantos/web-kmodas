import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';

/** Página principal */
export const Reducers = combineReducers({
  clickState: clickReducer,
});