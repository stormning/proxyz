import React from 'react';
//actions
//actionTypes
import ActionTypes from '../constants/ActionTypes';
//component
import Main from '../components/layouts/Main';

import {connectWithRouter} from '../components/Utils';

export default connectWithRouter(Main, null, null);