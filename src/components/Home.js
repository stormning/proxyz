import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import LoginForm from './Login'

const styleSheet = createStyleSheet('FullWidthGrid', theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Home = ({classes}) => (
    <div className={classes.root}>
        <Grid container
              align="center"
              direction="row"
              justify="center"
        >
            <Paper>
                <LoginForm/>
            </Paper>
        </Grid>
    </div>
);

export default Home;