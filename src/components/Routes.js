import React from 'react';
import MainContainer from 'bundle-loader?lazy&name=app-[name]!../containers/MainContainer';
import HomeContainer from 'bundle-loader?lazy&name=app-[name]!../containers/HomeContainer';
import DashboardContainer from 'bundle-loader?lazy&name=app-[name]!../containers/DashboardContainer';

const routesConfig = [
    {
        component: MainContainer,
        routes: [
            {
                path: '/',
                exact: true,
                component: HomeContainer
            },
            {
                path: '/dashboard',
                exact: true,
                component: DashboardContainer
            }
        ]
    }
];

export default routesConfig;