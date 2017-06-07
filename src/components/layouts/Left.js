import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Toolbar, {ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import GiftIcon from 'material-ui-icons/CardGiftcard';
import InvitationIcon from 'material-ui-icons/InsertInvitation';
import SettingsIcon from 'material-ui-icons/Settings';
import FeedbackIcon from 'material-ui-icons/Feedback';

import '../../../assets/css/pages/left.scss';

const Left = ({selected = 'dashboard', linkTo, redirect}) => {

    const getClasses = (current) => {
        console.log(redirect);
        return current === redirect ? "selected" : "";
    };

    return (
        <Drawer docked open className="left">
            <Toolbar className="left-toolbar" onTouchTap={() => linkTo("/dashboard")}>
                <h3>Proxy Z</h3>
                <Divider className="left-toolbar-divider"/>
            </Toolbar>
            <List className="left">
                <ListItem button onTouchTap={() => linkTo("/dashboard")} className={getClasses("dashboard")}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="首页"/>
                </ListItem>
                <ListItem button onTouchTap={() => linkTo("/plan")} className={getClasses("plan")}>
                    <ListItemIcon>
                        <GiftIcon/>
                    </ListItemIcon>
                    <ListItemText primary="套餐"/>
                </ListItem>
                <ListItem button onTouchTap={() => linkTo("/invite")} className={getClasses("invite")}>
                    <ListItemIcon>
                        <InvitationIcon/>
                    </ListItemIcon>
                    <ListItemText primary="邀请"/>
                </ListItem>
                <ListItem button onTouchTap={() => linkTo("/settings")} className={getClasses("settings")}>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="设置"/>
                </ListItem>
                <ListItem button onTouchTap={() => linkTo("/feedback")} className={getClasses("feedback")}>
                    <ListItemIcon>
                        <FeedbackIcon/>
                    </ListItemIcon>
                    <ListItemText primary="反馈"/>
                </ListItem>
            </List>
        </Drawer>
    )
};
export default Left;