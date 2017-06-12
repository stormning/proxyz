import React from 'react';
import Main from '../components/layouts/Main';
import {connectWithRouter} from '../components/Utils';
import Actions from '../actions/MainActions';

export default connectWithRouter(Main, null, null);