import ActionTypes from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const TopReducers = handleActions({
    [ActionTypes.LOGOUT]: (state, action) => state.setIn(['loggedIn'], false)
}, Immutable.fromJS({
    loggedIn: false
}));
export default TopReducers;