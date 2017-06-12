import  React, {Component} from 'react';
import  Plan from '../components/pages/Plan';
import {connectWithRouter} from '../components/Utils';
import * as Actions from '../actions/PlanActions'

const PlanWrapper = (plan) => class extends Component {
    componentWillMount() {
        this.props.planLoad();
    }
    render() {
        return plan(this.props)
    }
};

export default connectWithRouter(PlanWrapper(Plan), {}, Actions);