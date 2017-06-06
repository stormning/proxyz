import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu'

import '../../../assets/css/pages/top.scss'

const Top = ({className, title, logout}) => (
    <AppBar className="top">
        <Toolbar>
            {/*<IconButton contrast>
                <MenuIcon />
            </IconButton>*/}
            <div className="grow">&nbsp;</div>
            <span>Welcome back, stormning</span>
            <Button className="loginBtn" contrast onTouchTap={logout}>退出</Button>
        </Toolbar>
    </AppBar>
);

Top.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};
export default Top;