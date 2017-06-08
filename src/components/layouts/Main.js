import React from 'react';
import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';

import Menu from '../../containers/MenuContainer';
import Top from '../../containers/TopContainer';
import '../../../assets/css/layouts/main.scss';
import * as Utils from '../Utils';

const Main = ({route, version = '1.0.0-alpha', title = 'ProxyZ'}) => (
    <div className="container">
        <div className="left">
            <Menu version={version} title={title}/>
        </div>
        <div className="right">
            <Top title={title}/>
            <div className="content">
                {
                    Utils.renderRoutes(route.routes)
                }
            </div>
        </div>
    </div>
);
export default Main;