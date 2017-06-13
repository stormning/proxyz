import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux-immutable';
import left from './MenuReducers';
import login from './LoginReducers';
import top from './TopReducers';
import plan from './PlanReducers';

export default combineReducers({
    left,
    login,
    top,
    plan,
    router: routerReducer
});