import React from 'react';
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
                    console.log(component);
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

const isNotEmpty = (test) => test && test.length > 0;

const smartConnect = (statePaths, actions) => {
    //use immutable js
    let mapStateToProps = isNotEmpty(statePaths) ?
        (state) => {
            let _ts = {};
            for (let [name, path] of statePaths) {
                _ts[name] = state.getIn(path);
            }
            return _ts;
        } : null;
    //dispatch actions
    let mapDispatchToProps = isNotEmpty(actions) ?
        (dispatch, ownProps) => (
            {...bindActionCreators(actions, dispatch)}
        ) : null;
    return connect(mapStateToProps, mapDispatchToProps);
};

export const connectWithRouter = (component, statePaths, actions) => withRouter(smartConnect(statePaths, actions)(component));