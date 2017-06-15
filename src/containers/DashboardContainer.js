import  React from 'react';
import  Dashboard from '../components/pages/Dashboard';
import {connectWithRouter, HC} from '../components/Utils';
import * as Actions from '../actions/DashboardActions'

export default connectWithRouter(HC(Dashboard, {'dashboardLoad': []}), {"usageData": ['dashboard', 'usageData']}, Actions);