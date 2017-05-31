import React, {Component} from 'react';
import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('SimpleAppBar', {
    root: {
        position: 'relative',
        width: '100%',
    },
    appBar: {
        position: 'relative',
    },
});

const Header = ({classes}) => {
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography type="title" colorInherit>ProxyZ</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styleSheet)(Header);