import {createAction} from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

export const logout = createAction(ActionTypes.LOGOUT);