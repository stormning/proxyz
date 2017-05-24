import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}