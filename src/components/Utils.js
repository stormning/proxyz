import React, {Component} from 'react';
import Bundle from './Bundle';
import {bindActionCreators} from 'redux'
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export const lazyComponent = (component) => (
    (props) => (
        <Bundle load={component}>
            {
                (component) => {
                    return component(props);
                }
            }
        </Bundle>
    )
);

export const renderRoutes = (routes) => (
    routes ? React.createElement(
        Switch,
        null,
        routes.map(function (route, i) {
            return React.createElement(Route, {
                key: i, path: route.path, exact: route.exact, strict: route.strict, render: function render(props) {
                    return React.createElement(lazyComponent(route.component), Object.assign({}, props, {route: route}));
                }
            });
        })
    ) : null
);

const smartConnect = (statePaths, actions) => {
    //use immutable js
    let mapStateToProps = statePaths ?
        (state) => {
            let _ts = {};
            for (let key of Object.keys(statePaths)) {
                _ts[key] = state.getIn(statePaths[key]);
            }
            return _ts;
        } : null;
    //dispatch actions
    let mapDispatchToProps = actions ?
        (dispatch, ownProps) => (
            {...bindActionCreators(actions, dispatch)}
        ) : null;
    return connect(mapStateToProps, mapDispatchToProps);
};

export const connectWithRouter = (component, statePaths, actions) => withRouter(smartConnect(statePaths, actions)(component));


export const HC = (comp, actionArguments) => class extends Component {
    componentWillMount() {
        actionArguments &&
        Object.keys(actionArguments).map((action) => {
            console.log(action);
                console.log(this.props[action]);
                this.props[action].apply(actionArguments[action]);
            }
        )
    }
    render() {
        return comp(this.props);
    }
};