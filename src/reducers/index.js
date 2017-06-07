import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux-immutable';
import left from './LeftReducers';
import login from './LoginReducers';
import top from './TopReducers';

export default combineReducers({
    left,
    login,
    top,
    router: routerReducer
});