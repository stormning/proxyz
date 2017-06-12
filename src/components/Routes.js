import React from 'react';
import Login from 'bundle-loader?lazy&name=app-[name]!../components/pages/Login';
import MainContainer from 'bundle-loader?lazy&name=app-[name]!../containers/MainContainer';
import HomeContainer from 'bundle-loader?lazy&name=app-[name]!../containers/HomeContainer';
import DashboardContainer from 'bundle-loader?lazy&name=app-[name]!../containers/DashboardContainer';
import PlanContainer from 'bundle-loader?lazy&name=app-[name]!../containers/PlanContainer';

const routesConfig = [
    {
        component: Login,
        path: '/login',
        exact: true
    },
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
            },
            {
                path: '/plan',
                exact: true,
                component: PlanContainer
            }
        ]
    }
];

export default routesConfig;