import {createAction} from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';

export const dashboardLoad = createAction(ActionTypes.DASHBOARD_LOAD, () => (
    axios.get("/usage").then(function (response) {
        return response.data.data
    })
));