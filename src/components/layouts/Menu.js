import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toolbar, {ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import leftConfig from './LeftConfig'

const Menu = ({selected = 'dashboard', linkTo, redirect}) => {

    const getClasses = (current) => {
        return current === redirect ? "selected" : "";
    };

    const getLeftItems = (itemsConfig) => {
        let _ret = [];
        for (let {title, path, icon} of itemsConfig) {
            _ret.push(
                <ListItem button onTouchTap={() => linkTo(`${path}`)} className={getClasses(`${path}`)} key={path}>
                    <ListItemIcon>
                        {React.createElement(icon)}
                    </ListItemIcon>
                    <ListItemText primary={title}/>
                </ListItem>
            );
        }
        return _ret;
    };

    return (
        <Drawer docked open className="menu">
            <Toolbar className="menu-toolbar" onTouchTap={() => linkTo("/dashboard")}>
                <h3>Proxy Z</h3>
                <Divider className="left-toolbar-divider"/>
            </Toolbar>
            <List className="menu">
                {getLeftItems(leftConfig)}
            </List>
        </Drawer>
    )
};
export default Menu;