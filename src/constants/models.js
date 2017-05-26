import Immutable from 'immutable';

//models
export const [LoginModel] = ["loginModel"];

//states
export const state = Immutable.fromJS(
    {
        [LoginModel]: {
            userName: "",
            password: ""
        }
    }
);
