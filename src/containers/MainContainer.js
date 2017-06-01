import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//actions
//actionTypes
import {MainActions} from '../constants/ActionTypes';
//component
import Main from '../components/layouts/Main';

//actionName and state map
const mapStateToProps = (state) => ({
    [MainActions.CLICK_DRAWER_ICON]: (state) => state
});

//methodName and callback(dispatch Action object) map
const mapDispatchToProps = (dispatch) => ({
    onClickDrawerIcon: (event) => (
        dispatch()
    ),
    onClickDrawerMenu: (event) => (
        dispatch()
    )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))