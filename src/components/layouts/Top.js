import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import '../../../assets/css/layouts/top.scss'

const Top = ({className, title, logout}) => (
    <AppBar className="top">
        <Toolbar>
            <div className="grow">&nbsp;</div>
            <span>stormning</span>
            <Button className="logoutBtn" contrast onTouchTap={logout}>退出</Button>
        </Toolbar>
    </AppBar>
);

export default Top;