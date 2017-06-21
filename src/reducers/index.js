import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux-immutable';
import menu from './MenuReducers';
import login from './LoginReducers';
import top from './TopReducers';
import plan from './PlanReducers';
import dashboard from './DashboardReducers';

export default combineReducers({
    dashboard,
    menu,
    login,
    top,
    plan,
    router: routerReducer
});