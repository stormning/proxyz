import {createAction} from 'redux-actions';
import {DO_LOGIN, LOGIN_RESET} from '../constants/actionTypes';
export const doLogin = ({userName, password}) => createAction(DO_LOGIN, {userName, password});
export const loginReset = ({userName, password}) => createAction(LOGIN_RESET);