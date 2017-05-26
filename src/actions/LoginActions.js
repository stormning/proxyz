import {createAction} from 'redux-actions';
import {

} from '../constants/actionTypes';

export const doLogin = ({userName, password}) => createAction(DO_LOGIN, {userName, password});
export const loginReset = ({userName, password}) => createAction(LOGIN_RESET);