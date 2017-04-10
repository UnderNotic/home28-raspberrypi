import { combineReducers } from 'redux';
import loginReducer from './modules/LoginDuck';
import authenticationReducer from './modules/AuthenticationDuck';

export default combineReducers({ loginReducer, authenticationReducer });