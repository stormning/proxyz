import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//actions
//actionTypes
import {MainActions} from '../constants/actionTypes';
//component
import Main from '../components/layouts/Main';

//actionName and state map
const mapStateToProps = (state) => ({
    [MainActions.CLICK_DRAWER_ICON]: (state) => state
});

//methodName and callback(dispatch Action object) map
const mapDispatchToProps = (dispatch) => ({
    onClickDrawerIcon: (event) => (
        dispatch(viewMore())
    ),
    onClickDrawerMenu: (event) => (
        dispatch
    )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));