import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import reducers from '../reducers' // Or wherever you keep your reducers

import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';
import Home from './Home';
import Dashboard from './Dashboard';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer.js to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

store.dispatch

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
            redirectTo: '/dashboard'
        };
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider>
                        <div>
                            <Route exact path="/" render={() => (
                                this.state.loggedIn ? (
                                    <Redirect to={{pathname: this.state.redirectTo}}/>
                                ) : (
                                    <Home classes={{root: 'test'}}/>
                                )
                            )}/>
                            <Route path="/dashboard" component={Dashboard}/>
                        </div>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;