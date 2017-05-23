import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class ProxyZDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}
                />
                <Drawer width={200} openSecondary={true} open={this.state.open} >
                    <AppBar title="AppBar" />
                </Drawer>
            </div>
        );
    }
}

import styles from './App.css';

const App = (props) => (
    <AppBar title='ProxyZ'/>
);

export default App;