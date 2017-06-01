import {LoginActions} from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';
const defaultState = {};

const LoginReducers = handleActions({}, defaultState);

export default LoginReducers;