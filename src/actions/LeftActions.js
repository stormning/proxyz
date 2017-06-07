import {createAction} from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';
import {history} from '../store';
export const linkTo = createAction(ActionTypes.LEFT_ITEM_CLICKED, (redirect) => {
    history.push(redirect);
    return {redirect: redirect}
});