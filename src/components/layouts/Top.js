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

const Top = ({className, title}) => (
    <AppBar className="top">
        <Toolbar>
            {/*<IconButton contrast>
                <MenuIcon />
            </IconButton>*/}
            <Typography type="title" colorInherit component="h2">{title}</Typography>
            <Button className="loginBtn" contrast>登陆</Button>
        </Toolbar>
    </AppBar>
);

Top.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};
export default Top;