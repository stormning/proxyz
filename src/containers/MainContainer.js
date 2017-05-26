import React, {Component} from 'react';

import {connect} from 'react-redux';
//actions
import {viewMore} from '../actions/DashboardActions';
//actionTypes
import {MainActions} from '../constants/actionTypes';
//component
import  Dashboard from '../components/pages/Dashboard';

//actionName and state map
const mapStateToProps = (state) => ({
    [MainActions.CLICK_DRAWER_ICON]: (state) => {
        drawer : state.getIn(["drawer"]);
    }
});

//methodName and callback(dispatch Action object) map
const mapDispatchToProps = (dispatch) => ({
    onClickViewMore: (event) => (
        dispatch(viewMore())
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);