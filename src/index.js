import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import App from './components/App';


const routes = (
    <Route path="/" component={App}>

    </Route>
);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Router>
                <Component/>
            </Router>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(() => render(App));
}