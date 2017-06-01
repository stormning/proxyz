import ActionTypes from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
const LoginReducers = handleActions({
    [ActionTypes.LOGIN_SUBMIT]: (state, action) => state.set('processing', true),
    [ActionTypes.LOGIN_SUCCESS]: (state, action) => state.set('processing', false),
    [ActionTypes.LOGIN_FAILED]: (state, action) => state.set('processing', false)
}, Immutable.fromJS({
    processing: false
}));

export default LoginReducers;