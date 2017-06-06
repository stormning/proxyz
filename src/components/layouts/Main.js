import React from 'react';
import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';

import Left from './Left';
import Top from '../../containers/TopContainer';
import '../../../assets/css/pages/main.scss';
import * as Utils from '../Utils';

const Main = ({route, version = '1.0.0-alpha', title = 'ProxyZ'}) => (
    <div className="appContainer">
        <Top title={title}/>
        <Left version={version} title={title}/>
        <div className="appContent">
            {
                Utils.renderRoutes(route.routes)
            }
        </div>
    </div>
);
export default Main;