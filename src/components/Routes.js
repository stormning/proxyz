import React from 'react';
import HomeContainer from 'bundle-loader?lazy&name=app-[name]!../containers/HomeContainer';
import DashboardContainer from 'bundle-loader?lazy&name=app-[name]!../containers/DashboardContainer';

const routesConfig = [
    {
        component: HomeContainer,
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
            },
            {
                path: '/child/:id',
                component: HomeContainer,
                routes: [
                    {
                        path: '/child/:id/grand-child',
                        component: HomeContainer
                    }
                ]
            }
        ]
    }
];

export default routesConfig;