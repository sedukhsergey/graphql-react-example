import React from 'react';
import { Route } from 'react-router-dom';

import RouteType from './route.types';

const RouteWithSubRoutes = (route: RouteType) => (
    <Route
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
    />
);

export default RouteWithSubRoutes;
