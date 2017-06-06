import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux-immutable';
import login from './LoginReducers';
import top from './TopReducers';

export default combineReducers({
    login,
    top,
    router: routerReducer
});