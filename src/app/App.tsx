import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../routes/RouteWithSubRoutes';
import routes from '../routes/RouteConfig';

const App: React.FC = () => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
};

export default App;
