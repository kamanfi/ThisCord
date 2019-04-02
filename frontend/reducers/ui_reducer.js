import { combineReducers } from 'redux';
import modalReducer  from './modals_reducer';


export const ui = combineReducers({
  modal: modalReducer
});
