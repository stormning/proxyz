import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Toolbar, {ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import GiftIcon from 'material-ui-icons/CardGiftcard';
import InvitationIcon from 'material-ui-icons/InsertInvitation';
import SettingsIcon from 'material-ui-icons/Settings';
import PropTypes from 'prop-types';

import '../../../assets/css/pages/left.scss';

class Left extends Component {
    linkTo = (link) => (
        console.log(link)
    );

    render() {
        return (
            <Drawer docked open className="left">
                <Toolbar className="left-toolbar" onTouchTap={this.linkTo("/dashboard")}>
                    {/*<Link to="/">
                        <Typography type="headline" component="h2">
                            {this.props.title}
                        </Typography>
                    </Link>
                    <Link to="/">
                        <Typography type="headline" component="span">
                            {this.props.version}
                        </Typography>
                    </Link>
                    <Divider inset/>*/}
                    <Divider className="left-toolbar-divider"/>
                </Toolbar>
                <List className="left">
                    <ListItem button onTouchTap={this.linkTo("/dashboard")}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="首页"/>
                    </ListItem>
                    <ListItem button onTouchTap={this.linkTo("/plan")}>
                        <ListItemIcon>
                            <GiftIcon/>
                        </ListItemIcon>
                        <ListItemText primary="套餐"/>
                    </ListItem>
                    <ListItem button onTouchTap={this.linkTo("/invite")}>
                        <ListItemIcon>
                            <InvitationIcon/>
                        </ListItemIcon>
                        <ListItemText primary="邀请"/>
                    </ListItem>
                    <ListItem button onTouchTap={this.linkTo("/settings")}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="设置"/>
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}

Left.propTypes = {
    classes: PropTypes.any,
    version: PropTypes.string
};
export default Left;