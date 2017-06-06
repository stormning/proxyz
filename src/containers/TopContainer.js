import React from 'react';
import Top from '../components/layouts/Top';
import * as Actions from '../actions/TopActions'

import {connectWithRouter} from '../components/Utils';

export default connectWithRouter(Top, null, Actions);