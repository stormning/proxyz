import models from '../constants/models';
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux-immutable';
import login from './LoginReducers';

export default combineReducers({
    login,
    router: routerReducer
});