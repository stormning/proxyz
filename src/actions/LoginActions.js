import {createAction} from 'redux-actions';
import {
    LoginActions
} from '../constants/ActionTypes';

export const doLogin = ({userName, password}) => createAction(LoginActions.DO_LOGIN, {userName, password});
export const reset = ({userName, password}) => createAction(LoginActions.RESET);