import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

// AppContainer is a necessary wrapper component for HMR
import {AppContainer} from 'react-hot-loader';
import store from './store';
import Routes from './components/Routes';

import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider>
                        <Routes redirectTo="/dashboard"/>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(() => {
        alert(111);
        render();
    });
}