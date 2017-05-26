import React from 'react';
import {connect} from 'react-redux';
//actions
import {viewMore} from '../actions/DashboardActions';
//actionTypes
import {DashBoardActions} from '../constants/actionTypes';
//component
import  Dashboard from '../components/pages/Dashboard';

//actionName and state map
const mapStateToProps = (state) => ({
    [DashBoardActions.VIEW_MORE]: (state) => {
        return state;
    }
});

//methodName and callback(dispatch Action object) map
const mapDispatchToProps = (dispatch) => ({
    onClickViewMore: (event) => (
        dispatch(viewMore())
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);