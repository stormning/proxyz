import ActionTypes from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const DashboardReducers = handleActions({
    [ActionTypes.DASHBOARD_LOAD]: (state, action) => state.setIn(['usageData'], action.payload)
}, Immutable.fromJS({
    usageData: {}
}));
export default DashboardReducers;