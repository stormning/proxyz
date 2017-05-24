import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import LoginForm from './LoginForm';
import ManagerContainer from '../containers/ManagerContainer';

const Dashboard = () => (
    <ManagerContainer>
        <h1>this is dashboard</h1>
    </ManagerContainer>
);

export default Dashboard;