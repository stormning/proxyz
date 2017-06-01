import React from 'react';
//actions
import {viewMore} from '../actions/DashboardActions';
//actionTypes
import {DashBoardActions} from '../constants/ActionTypes';
//component
import  Home from '../components/pages/Home';

import * as Utils from '../components/Utils';

export default Utils.connect("home",
    {
        [DashBoardActions.VIEW_MORE]: (state) => {
            return state;
        }
    }, {
        onClicklViewMore: (event) => (
            viewMore()
        )
    }
);