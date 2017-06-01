import React from 'react';
//actions
import {viewMore} from '../actions/DashboardActions';
//actionTypes
import ActionTypes from '../constants/ActionTypes';
//component
import  Dashboard from '../components/pages/Dashboard';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {connectWithRouter} from '../components/Utils';

export default connectWithRouter(Dashboard);