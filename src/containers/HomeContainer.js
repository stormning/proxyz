import React from 'react';
import  Home from '../components/pages/Home';
import  Login from '../components/pages/Login';

import {connectWithRouter} from '../components/Utils';

export default connectWithRouter(Home, null, null);