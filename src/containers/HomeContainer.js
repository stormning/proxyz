import React from 'react';
//actions
import * as actions from '../actions/DashboardActions';
//component
import  Home from '../components/pages/Home';

import {connectWithRouter} from '../components/Utils';

export default connectWithRouter(Home, null, null);