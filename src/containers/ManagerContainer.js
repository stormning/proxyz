import React, {Component} from 'react';
import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ProxyAppBar from '../components/ProxyAppBar'
import Drawer from 'material-ui/Drawer';
import Pager from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

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

class ManagerContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Drawer docked="true" open="true">
                    <Pager>
                        <Typography type="title" colorInherit>
                            ProxyZ
                            <span>v1.0-alpha</span>
                        </Typography>
                    </Pager>
                </Drawer>
                <AppBar>
                    <Toolbar>
                        <Typography type="title" colorInherit>ProxyZ</Typography>
                    </Toolbar>
                </AppBar>
                ${this.props.children}
            </div>
        );
    }
}
export default withStyles(styleSheet)(ManagerContainer);