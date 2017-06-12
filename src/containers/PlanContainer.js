import  React from 'react';
import  Plan from '../components/pages/Plan';
import {connectWithRouter, HC} from '../components/Utils';
import * as Actions from '../actions/PlanActions'

export default connectWithRouter(HC(Plan, {"planLoad": []}), {}, Actions);