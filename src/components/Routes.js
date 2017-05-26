import React from 'react';
import PropTypes from 'prop-types'
import {
    Route,
    Redirect
} from 'react-router-dom';

import  DashboardContainer from '../containers/DashboardContainer';

const Routes = ({redirectTo, loggedIn = false}) => (
    <div>
        <Route exact path="/" render={() => (
            loggedIn ? (
                <Redirect to={{pathname: redirectTo}}/>
            ) : (
                <Home classes={{root: 'test'}}/>
            )
        )}/>
        <Route path="/dashboard" component={DashboardContainer}/>
    </div>
);

Routes.propTypes = {
    redirectTo: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool
};


export default Routes;