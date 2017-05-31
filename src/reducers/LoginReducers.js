import {LoginActions} from '../constants/actionTypes';
import {handleActions} from 'redux-actions';
const defaultState = {};

const LoginReducers = handleActions({}, defaultState);

export default LoginReducers;