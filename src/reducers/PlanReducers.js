import ActionTypes from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const PlanReducers = handleActions({
    [ActionTypes.PLAN_LOAD]: (state, action) => state.setIn(["plans"], action.payload)
}, Immutable.fromJS({
    plans: []
}));
export default PlanReducers;