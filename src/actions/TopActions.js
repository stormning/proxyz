import {createAction} from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';
import {history} from '../store';
export const logout = createAction(ActionTypes.LOGOUT, () => history.push('/login'));