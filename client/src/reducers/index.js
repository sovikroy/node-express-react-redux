import { combineReducers } from 'redux';
import { callApiReducer } from './apiReducer';

export default combineReducers({
    api: callApiReducer
});