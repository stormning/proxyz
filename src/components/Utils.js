import React from 'react';
import Bundle from './Bundle';
import {Route, Switch} from 'react-router-dom';
export const lazyComponent = (component) => (
    (props) => (
        <Bundle load={component}>
            {
                (component) => component(props)
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