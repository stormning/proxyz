import {handleActions} from 'redux-actions';
import {state, LoginModel} from '../constants/models';
import {DO_LOGIN, LOGIN_RESET} from '../constants/actionTypes';

const loginReducers = handleActions({
    //action handlers
    [DO_LOGIN]: (state) => {
        state.get(LoginModel);
    },
    [LOGIN_RESET]: (state) => {
        let loginState = state.get(LoginModel);
        loginState.set("username", "");
        loginState.set("password", "");
    }
}, state.get(LoginModel));