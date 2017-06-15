import {createAction} from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';
export const planLoad = createAction(ActionTypes.PLAN_LOAD, () =>
    axios.get('/plans').then(function (response) {
        return response.data.data
    })
);