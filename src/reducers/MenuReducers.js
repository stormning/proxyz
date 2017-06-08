import ActionTypes from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const MenuReducers = handleActions({
    [ActionTypes.LEFT_ITEM_CLICKED]: (state, action) => {
        return state.setIn(['redirect'], action.payload.redirect)
    }
}, Immutable.fromJS({
    redirect: '/dashboard'
}));
export default MenuReducers;