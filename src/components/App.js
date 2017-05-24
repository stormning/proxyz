import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import {withStyles, createStyleSheet, MuiThemeProvider} from 'material-ui/styles';
import Home from './Home'
import Dashboard from './Dashboard'

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
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact path="/" render={() => (
                            this.state.loggedIn ? (
                                <Redirect to={{pathname: this.state.redirectTo}}/>
                            ) : (
                                <Home classes={{root:'test'}}/>
                            )
                        )}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;