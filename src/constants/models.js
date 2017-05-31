import Immutable from 'immutable';
import keymirror from 'keymirror';

//models
export const models = keymirror({
    Login: null,
    Home: null,
    Dashboard: null
});

//states
export const state = Immutable.fromJS(
    {
        [models.Login]: {
            userName: "",
            password: ""
        }
    }
);
